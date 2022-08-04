import axios from 'axios';
import { RECIPES, RECIPES_BY_NAME, RECIPE_DETAIL, ALL_DIETS } from '../../constants';

export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPES_BY_NAME = 'GET_RECIPES_BY_NAME';
export const GET_RECIPE_DETAIL = 'GET_RECIPE_DETAIL';
export const CREATE_RECIPE = 'CREATE_RECIPE';
export const GET_DIETS = 'GET_DIETS';

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