import { GET_RECIPES, GET_RECIPES_BY_NAME, GET_RECIPE_DETAIL, CREATE_RECIPE, GET_DIETS,  } from '../actions/index';

const initialState = {
    recipes: [],
    diets: [],
    recipeDetail: {}
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
            }
    }
}