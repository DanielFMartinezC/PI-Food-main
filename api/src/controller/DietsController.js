const { Diet } = require('../db');
module.exports = async function(){
    const dietTypes = ["gluten free", "dairy free", 'ketogenic', "lacto ovo vegetarian", 'vegan', 'pescetarian', "paleolithic", 'primal', "fodmap friendly", 'whole 30'];
    for(let i = 0; i < dietTypes.length; i++){
        await Diet.create({name: dietTypes[i]})
    }
};