const { getRecipes, getRecipesById, createRecipe, deleteRecipe, restoreRecipe, deletedRecipes } = require('../controller/RecipesController')

const { Router } = require('express');
const router = Router();
const { Recipe, Diet, Op } = require('../db');
const axios = require('axios');
const { complexSearch } = require('../Utils/Constants');
const createDiet = require('../controller/DietsController');
const { v4: uuidv4, validate } = require('uuid');
const {
    apiKey,
} = process.env;

module.exports = router;
/* 
estructura de post
{
    "recipe": {
        "title": "affsfas",
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
    "diets": [
        "gluten free",
        "dairy free"
    ]
} 
*/

router.get('/', getRecipes);

router.get('/deletedRecipes', deletedRecipes);

router.get('/:id', getRecipesById);

router.post('/', createRecipe);

router.post('/copia', async (req, res) => {
    try {
        const { data } = await axios.get(complexSearch);
        // return res.json(data.results.length)
        console.log(data)
        // const axiosResult = [];

        for (let i = 0; i < data.number; i++) {
            const a = {
                id: uuidv4(),
                image: data.results[i]['image'],
                title: data.results[i]['title'],
                summary: data.results[i]['summary'],
                healthScore: data.results[i]['healthScore'],
                steps: data.results[i]['analyzedInstructions'] ? data.results[i]['analyzedInstructions'][0]['steps'] : []
            };
            const newRecipe = await Recipe.create(a)
            // axiosResult.push(a);
            const findDiets = [];
            // console.log(data.results[i]['diets'].length)
            for (let j = 0; j < data.results[i]['diets'].length; j++) {

                findDiets.push(await Diet.findOne({
                    where: {
                        name: data.results[i]['diets'][j]
                    },
                    attributes: ['id']
                }))
            };

            await newRecipe.addDiets(findDiets)
        };
        // const respons = await Recipe.bulkCreate(axiosResult);
        return res.send('asdsa')
    } catch (e) {
        res.status(500)
        return res.json(e.message)
    }
});

router.delete('/:id', deleteRecipe);

router.put('/:id', restoreRecipe)