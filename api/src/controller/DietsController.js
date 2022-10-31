const { Recipe, Diet, Op } = require('../db');

const getDiets = async function (req, res) {
    try {
        let allDiets = await Diet.findAll({
            attributes: ['id', 'name']
        });
        if (!allDiets.length) {
            await createDiet();
        };
        allDiets = await Diet.findAll({
            attributes: ['id', 'name']
        });
        return res.json(allDiets)
    } catch (e) {
        res.status(e.response.status)
        return res.json(e.message)
    }
}

const createDiet = async function (req, res) {
    try {
        const dietTypes = [{ name: "gluten free" }, { name: "dairy free" }, { name: 'ketogenic' }, { name: "lacto ovo vegetarian" }, { name: 'vegan' }, { name: 'pescatarian' }, { name: "paleolithic" }, { name: 'primal' }, { name: "fodmap friendly" }, { name: 'whole 30' }];
        // for (let i = 0; i < dietTypes.length; i++) {
        //     await Diet.create({ name: dietTypes[i] })
        // };
        await Diet.bulkCreate(dietTypes)
        res.status(201);
        return res.json('Diets created')
    } catch (e) {
        res.status(500);
        return res.json(e.message)
    }
};

module.exports = {
    getDiets,
    createDiet
}