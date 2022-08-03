import axios from 'axios';
import { URL_BASE } from '../../constants';

export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPES_BY_NAME = 'GET_RECIPES_BY_NAME';
export const GET_RECIPE_DETAIL = 'GET_RECIPE_DETAIL';
export const CREATE_RECIPE = 'CREATE_RECIPE';
export const GET_DIETS = 'GET_DIETS';

export const getAllRecipes = ()=>{
    return async (dispatch) => {
        axios.get(URL_BASE + 'recipes')
    }
};

export const getRecipesByName = (name)=>{
    return async (dispatch) => {
        axios.get(URL_BASE + 'recipes' + `?name=${name}`)
    }
}