const { Router } = require('express');
const router = Router();
const { Diet } = require('../db');
const createDiet = require('../controller/DietsController');

module.exports = router;

router.get('/', async(req, res)=>{
    try{
        let allDiets = await Diet.findAll({
            attributes: ['id', 'name']
        });
        if(!allDiets.length){
           await createDiet();
        };
        allDiets = await Diet.findAll({
            attributes: ['id', 'name']
        });
        return res.json(allDiets)
    }catch(e){
        return new Error(e)
    }
})