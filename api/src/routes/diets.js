const { Router } = require('express');
const router = Router();
const { Diet } = require('../db');
const { createDiet, getDiets } = require('../controller/DietsController');

module.exports = router;

router.get('/', getDiets);

router.post('/', createDiet)