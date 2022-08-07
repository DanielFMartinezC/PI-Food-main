import { GET_RECIPES, GET_RECIPES_BY_NAME, GET_RECIPE_DETAIL, CREATE_RECIPE, GET_DIETS, ORDER_ASCE, ORDER_DESCE, HEALTH_ASCE, HEALTH_DESCE } from '../actions/index';

const initialState = {
    recipes: [],
    diets: [],
    recipeDetail: {}
};
function compareFunctionByTitle(x, y){
    if(x.title < y.title){
        return -1
    } else if(x.title > y.title){
        return 1
    };
    return 0
};

function compareFunctionByHealthScore(x, y){
    if(x.healthScore < y.healthScore){
        return -1
    } else if(x.healthScore > y.healthScore){
        return 1
    };
    return compareFunctionByTitle(y, x)
};

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
        case ORDER_ASCE:
            return {
                ...state,
                recipes: state.recipes.sort(compareFunctionByTitle)
            };
        case ORDER_DESCE:
            return{
                ...state,
                recipes: state.recipes.sort(compareFunctionByTitle).reverse()
            };
        case HEALTH_ASCE:
            return {
                ...state,
                recipes: state.recipes.sort(compareFunctionByHealthScore)
            };
        case HEALTH_DESCE:
            return{
                ...state,
                recipes: state.recipes.sort(compareFunctionByHealthScore).reverse()
            }
            
    }
};

export default rootReducer;