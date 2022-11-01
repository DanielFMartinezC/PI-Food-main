const { Recipe, Diet, Op } = require('../db');
const { v4: uuidv4, validate } = require('uuid');

const getRecipes = async (req, res) => {
    try {
        const { name } = req.query;
        // const { data } = await axios.get(complexSearch);

        if (name) {
            const search = name[0].toUpperCase() + name.substring(1)
            const recipes = await Recipe.findAll({
                where: {
                    title: {
                        [Op.like]: `%${search}%`
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

            // const filter = data.results.filter(x => x.title.includes(name));
            // const response = recipes.concat(filter)
            if (recipes) {
                // return res.json(response)
                return res.json(recipes)
            } else {
                res.status(404);
                return res.send('no recipe found')
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
            // const response = recipes.concat(data.results);
            // return res.json(response)
            if (recipes.length) {
                return res.json(recipes)
            } else {
                res.status(404);
                return res.json('recipes not found')
            }
        }

    } catch (e) {
        res.status(500)
        return res.json(e.message)
    }
};

const getRecipesById = async (req, res) => {
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
                paranoid: false
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
        res.status(500)
        return res.json(e.message)
    }
};

const deletedRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.findAll({
            where: {
                deletedAt: {
                    [Op.ne]: null
                }
            },
            paranoid: false
        });
        if (recipes.length) {
            return res.json(recipes)
        } else {
            res.status(404);
            return res.json('recipes not found')
        }
    } catch (e) {
        res.status(500);
        return res.json(e.message)
    }
}

const createRecipe = async (req, res) => {
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
        res.status(500)
        return res.json(e.message)
    }
};

const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const query = await Recipe.destroy({
            where: {
                id: id
            }
        });
        if (query < 1) {
            res.status(404);
            return res.json('Recipe not found')
        }
        return res.json('Recipe was deleted')
    } catch (e) {
        res.status(500);
        return res.json(e.message)
    }
};

const restoreRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const query = await Recipe.restore({
            where: {
                id: id
            }
        });
        if (query < 1) {
            res.status(404);
            return res.json('Recipe not found')
        }
        return res.json('Recipe was restored')
    } catch (e) {
        res.status(500);
        return res.json(e.message)
    }
};

module.exports = {
    getRecipes,
    getRecipesById,
    createRecipe,
    deleteRecipe,
    restoreRecipe,
    deletedRecipes
}   