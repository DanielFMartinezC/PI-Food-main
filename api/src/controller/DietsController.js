const { Diet } = require('../db');
module.exports = async function(){
    const dietTypes = ['Gluten free', 'Ketogenic', 'Vegetarian', 'Lacto-Vegetarian', 'Ovo-Vegetarian', 'Vega', 'Pescetarian', 'Paleo', 'Primal', 'Low FODMAP', 'Whole30'];
    for(let i = 0; i < dietTypes.length; i++){
        await Diet.create({name: dietTypes[i]})
    }
};