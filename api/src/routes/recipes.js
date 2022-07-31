const { Router } = require('express');
const router = Router();
const {Recipe, Op } = require('../db')

module.exports = router;

router.get('/', async (req, res)=> {
    try{
        const { name } = req.query;
        const recipes = await Recipe.findAll({
            where: {
                [Op.substring]: `%${name}%`
            }
        })
    }catch(e){
        return e
    }
});