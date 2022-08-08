import axios from 'axios';
import { RECIPES, RECIPES_BY_NAME, RECIPE_DETAIL, ALL_DIETS } from '../../constants';

export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPES_BY_NAME = 'GET_RECIPES_BY_NAME';
export const GET_RECIPE_DETAIL = 'GET_RECIPE_DETAIL';
export const CREATE_RECIPE = 'CREATE_RECIPE';
export const GET_DIETS = 'GET_DIETS';
export const ORDER_ASCE = 'ORDER_ASCE';
export const ORDER_DESCE = 'ORDER_DESC';
export const HEALTH_ASCE = 'HEALTH_ASCE';
export const HEALTH_DESCE = 'HEALTH_DESCE';
export const FILTER_BY_DIETS = 'FILTER_BY_DIETS';

export const getAllRecipes = ()=>{
    return async (dispatch) => {
        const { data } = await axios.get(RECIPES);
        return dispatch({ type: GET_RECIPES, payload: data})

    }
};

export const getRecipesByName = (name)=>{
    return async (dispatch) => {
        const { data } = await axios.get(RECIPES_BY_NAME + name);
        return dispatch({ type: GET_RECIPES_BY_NAME, payload: data})
    }
};

export const getRecipesDetail = (id)=>{
    return async (dispatch) =>{
        const { data } = await axios.get(RECIPE_DETAIL + id);
        return dispatch({ type: GET_RECIPE_DETAIL, payload: data })
    }
}

// export const createRecipe = ()=>{
//     return async(dispatch) =>{
//         const { data } = await axios.post()
//     }
// };

export const getDiets = ()=>{
    return async(dispatch)=>{
       const {data} = await axios.get(ALL_DIETS);
       return dispatch({type: GET_DIETS, payload: data})
    }
};

export const changeOrder = (order, type)=>{
    if(type === 'Alphabetical'){
        if(order === 'Ascending') {
            return {
                type: ORDER_ASCE
            }
        };
        if (order = "Descending"){
            return {
                type: ORDER_DESCE
            }
        };
    };
    if(type === 'Numerical'){
        if(order === 'Ascending') {
            return {
                type: HEALTH_ASCE
            }
        };
        if (order = "Descending"){
            return {
                type: HEALTH_DESCE
            }
        };
    }
};

export const filterByDiets = (diets) =>{
    return {
        type: FILTER_BY_DIETS, payload: diets
    }
}
