const { Router } = require('express');
const router = Router();
const {Recipe, Op } = require('../db');
const axios = require('axios');
const { complexSearch } = require('../Utils/')
module.exports = router;

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
        if(recipes){
            return res.json(recipes.concat(data))
        }else{
            res.status(404);
            throw  new Error('no recipe found')
        }
    }catch(e){
        return e
    }
});

router.get('/:id', async (req, res)=>{

})