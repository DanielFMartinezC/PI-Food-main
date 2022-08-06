import { GET_RECIPES, GET_RECIPES_BY_NAME, GET_RECIPE_DETAIL, CREATE_RECIPE, GET_DIETS, CHANGE_ORDER } from '../actions/index';

const initialState = {
    recipes: [],
    diets: [],
    recipeDetail: {}
};

function compareFunction(x, y){
    if(x.title < y.title){
        return -1
    } else if(x.title > y.title){
        return 1
    };
    return 0
};
function stateSort(array, order){
    const ascen = array.sort(compareFunction)
    if(order === 'ascendant'){
        return ascen
    } else {
        return ascen.reverse()
    }
} 

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECIPES: 
            return {
                ...state,
                recipes: action.payload
            };
        case GET_RECIPES_BY_NAME: 
            return {
                ...state,
                recipes: action.payload
            };
        case GET_RECIPE_DETAIL: 
            return {
                ...state,
                recipeDetail: action.payload
            };
        case GET_DIETS:
            return {
                ...state,
                diets: action.payload
            };
        case CHANGE_ORDER:
            
    }
};

export default rootReducer;