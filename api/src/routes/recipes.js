const { Router } = require('express');
const router = Router();
const { Recipe, Diet, RecipeDiet, Op } = require('../db');
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

router.get('/', async (req, res) => {
    try {
        const { name } = req.query;
        const { data } = await axios.get(complexSearch);

        if (name) {
            try {
                const recipes = await Recipe.findAll({
                    where: {
                        title: {
                            [Op.like]: `%${name}%`
                        }
                    },
                    include: [{
                        model: Diet,
                        through: {
                            attributes: []
                        },
                        attributes: ['name']
                    }],
                });

                const filter = data.results.filter(x => x.title.includes(name));
                const response = recipes.concat(filter)
                if (response.length) {
                    return res.json(response)
                } else {
                    res.status(404);
                    throw res.send('no recipe found')
                }
            } catch (e) {
                res.status(e.response.status)
                return res.json(e.message)
            }
        } else {
            const recipes = await Recipe.findAll({
                include: [{
                    model: Diet,
                    through: {
                        attributes: []
                    },
                    attributes: ['name']
                }],
            });
            const response = recipes.concat(data.results);
            return res.json(response)
        }

    } catch (e) {
        res.status(e.response.status)
        return res.json(e.message)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (validate(id)) {
            const recipe = await Recipe.findByPk(id, {
                include: [{
                    model: Diet,
                    through: {
                        attributes: []
                    },
                    attributes: ['name']
                }],
            });
            if (!recipe) {
                res.status(404);
                throw res.send('Recipe not found')
            } else {
                return res.json(recipe)
            }
        } else {
            const { data } = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`);
            if (!data) {
                res.status(404);
                throw res.send('Recipe not found')
            } else {
                const axiosResult = {
                    image: data.image,
                    title: data.title,
                    dishTypes: data.dishTypes,
                    diets: data.diets,
                    summary: data.summary,
                    healthScore: data.healthScore,
                    steps: data.analyzedInstructions.length ? data.analyzedInstructions[0]['steps'] : [],
                    aggregateLikes: data.aggregateLikes
                };
                return res.json(axiosResult)
            }
        }

    } catch (e) {
        res.status(e.response.status)
        return res.json(e.message)
    }
});

router.post('/', async (req, res) => {
    try {
        const { recipe, diets } = req.body;
        const newRecipe = await Recipe.create({
            ...recipe,
            id: uuidv4()
        });

        let allDiets = await Diet.findAll();
        if (!allDiets.length) {
            await createDiet()
        };

        const findDiets = [];
        for (let i = 0; i < diets.length; i++) {
            findDiets.push(await Diet.findOne({
                where: {
                    name: diets[i]
                },
                attributes: ['id']
            }))
        };
        
        await newRecipe.addDiets(findDiets)
        return res.send('Your recipe was created successfully');
    } catch (e) {
        res.status(e.response.status)
        return res.json(e.message)
    }
});

router.post('/copia', async (req, res) => {
    try {
        const { data } = await axios.get(complexSearch);
        await Recipe.bulkCreate(data.results)
    } catch (e) {
        res.status(e.response.status)
        return res.json(e.message)
    }
})