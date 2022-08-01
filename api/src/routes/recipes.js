const { Router } = require('express');
const router = Router();
const {Recipe, Diet, Op } = require('../db');
const axios = require('axios');
const { complexSearch } = require('../Utils/Constants')
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
        const recipes = await Recipe.findAll({
            where: {
                name: {
                    [Op.substring]: `%${name}%`
                }
            }
        });
        const filter = data.results.filter(x=>x.title.includes(name));
        const response = recipes.concat(filter)
        if(response){
            return res.json(response)
        }else{
            res.status(404);
            throw  new Error('no recipe found')
        }
    }catch(e){
        return e
    }
});

router.get('/:id', async (req, res)=>{
    /* 
    Los campos mostrados en la ruta principal para cada receta (imagen, nombre, tipo de plato y tipo de dieta)
 Resumen del plato
 Nivel de "comida saludable" (health score)
 Paso a paso
    */
    try{
        const apiKey = 'e710e5d5e8194b53aad4516e0adfd3f1';
        const { id } = req.params;
        const { data } = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`);
        const axiosResult = {
            imagen: data.imagen,
            title: data.title,
            dishTypes: data.dishTypes,
            diets: data.diets,
            summary: data.summary,
            healthScore: data.healthScore,
            steps: data.analyzedInstructions[0]['steps']
        };
        res.json(axiosResult)
    }catch(e){
        return e
    }
});

router.post('/', async (req, res)=>{
    try{
        const { recipe, diets } = req.body;
        await Diet.create({name: "gluten free"});
        await Diet.create({name: "dairy free"});
        const newRecipe = await Recipe.create({...recipe});
        const idDiets = diets.map(async x => await Diet.findOne({attributes: 'id'}, {
            where: {
                name: x
            }
        }));
        res.json(await newRecipe.addDiets(idDiets));

    }catch(e){
        return e
    }
})