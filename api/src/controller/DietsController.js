const { Diet } = require('../db');

const getDiets = async function (req, res) {
    try {

    } catch (e) {
        res.status(500);
        return res.json(e.message)
    }
}

const createDiet = async function (req, res) {
    try{
        const dietTypes = ["gluten free", "dairy free", 'ketogenic', "lacto ovo vegetarian", 'vegan', 'pescatarian', "paleolithic", 'primal', "fodmap friendly", 'whole 30'];
        for (let i = 0; i < dietTypes.length; i++) {
            await Diet.create({ name: dietTypes[i] })
        }
    } catch (e) {
        res.status(500);
        return res.json(e.message)
    }
};

module.exports = {
    getDiets,
    createDiet
}