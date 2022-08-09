const { Router } = require('express');
const router = Router();
const {Recipe, Diet, Op } = require('../db');
const axios = require('axios');
const { complexSearch } = require('../Utils/Constants');
const createDiet = require('../controller/DietsController');
const { v4: uuidv4 } = require('uuid');
const {
    apiKey,
  } = process.env;

module.exports = router;
/* 
estructura de post
{
    "recipe": {
        "name": "affsfas",
        "summary": "jfafklf",
        "healthScore": 50,
        "steps": [
            {
                "number": 1,
                "step": "nhfdvs"
            },
            {
                "number": 2,
                "step": "adfasf"
            }
        ]
    }, 
    "diet": [
        "gluten free",
        "dairy free"
    ]
} 
*/
router.get('/', async (req, res)=> {
    try{
        const { name } = req.query;
        const { data } = await axios.get(complexSearch);
        const axiosResult = [];
        for(let i = 0; i < data.results.length; i++){
            const a = {
                id: data.results[i]['id'],
                image: data.results[i]['image'],
                title: data.results[i]['title'],
                diets: data.results[i]['diets'],
                healthScore: data.results[i]['healthScore']
            };
            axiosResult.push(a)
        };
        if(name){
            const recipes = await Recipe.findAll({
                where: {
                    name: {
                        [Op.substring]: `%${name}%`
                    }
                }
            });
            const filter = axiosResult.filter(x=>x.title.includes(name));
            const response = recipes.concat(filter)
            if(response.length){
                return res.json(response)
            }else{
                res.status(404);
                throw  new Error('no recipe found')
            }
        }else{
            const recipes = await Recipe.findAll();
            const response = recipes.concat(axiosResult);
            return res.json(response)
        }
        
    }catch(e){
        return new Error(e)
    }
});

router.get('/:id', async (req, res)=>{
    try{
        const { id } = req.params;
        const { data } = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`);
        const axiosResult = {
            image: data.image,
            title: data.title,
            dishTypes: data.dishTypes,
            diets: data.diets,
            summary: data.summary,
            healthScore: data.healthScore,
            steps: data.analyzedInstructions.length ? data.analyzedInstructions[0]['steps'] : null
        };
        res.json(axiosResult)
    }catch(e){
        return new Error(e)
    }
});

router.post('/', async (req, res)=>{
    try{
        const { recipe, diet } = req.body;
        const newRecipe = await Recipe.create({
            ...recipe,
            id: uuidv4()
        });
        let allDiets = await Diet.findAll();
        if(!allDiets.length){
            await createDiet()
        };
        const findDiets = [];
        for(let i = 0; i < diet.length; i++){
            findDiets.push(await Diet.findOne({
                where: {
                    name: diet[i]
                }
            }))
        };    
        const idDiets = findDiets.map(x=>x.id);
        return res.json(await newRecipe.addDiets(idDiets))
    }catch(e){
        return new Error(e)
    }
});