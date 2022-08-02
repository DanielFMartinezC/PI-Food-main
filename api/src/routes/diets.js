const { Router } = require('express');
const router = Router();
const { Diet } = require('../db');
const createDiet = require('../controller/DietsController');

module.exports = router;

router.get('/', async(req, res)=>{
    try{
        let allDiets = await Diet.findAll();
        if(!allDiets.length){
           await createDiet();
        };
        allDiets = await Diet.findAll();
        return res.json(allDiets)
    }catch(e){
        return new Error(e)
    }
})