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
export const ORIGINAL_ORDER = 'ORIGINAL_ORDER';
export const RECIPE_DETAIL_RESET = 'RECIPE_DETAIL_RESET';
export const GET_DELETED_RECIPES = 'GET_DELETED_RECIPES';
export const NETX_PAGE = 'NETX_PAGE';
export const PREV_PAGE = 'PREV_PAGE';

export const getAllRecipes = () => {
    return async (dispatch) => {
        const { data } = await axios.get(RECIPES);
        return dispatch({ type: GET_RECIPES, payload: data })

    }
};

export const getRecipesByName = (name) => {
    return async (dispatch) => {
        const { data } = await axios.get(RECIPES_BY_NAME + name);
        return dispatch({ type: GET_RECIPES_BY_NAME, payload: data })
    }
};

export const getRecipesDetail = (id) => {
    return async (dispatch) => {
        const { data } = await axios.get(RECIPE_DETAIL + id);
        return dispatch({ type: GET_RECIPE_DETAIL, payload: data })
    }
}

export const getDiets = () => {
    return async (dispatch) => {
        const { data } = await axios.get(ALL_DIETS);
        return dispatch({ type: GET_DIETS, payload: data })
    }
};

export const changeOrder = (order, type) => {
    if (type === 'Alphabetical') {
        if (order === 'Ascending') {
            return {
                type: ORDER_ASCE
            }
        } else if (order === "Descending") {
            return {
                type: ORDER_DESCE
            }
        } else if (order === '-') {
            return {
                type: ORIGINAL_ORDER
            }
        }
    };
    if (type === 'Numerical') {
        if (order === 'Ascending') {
            return {
                type: HEALTH_ASCE
            }
        } else if (order === "Descending") {
            return {
                type: HEALTH_DESCE
            }
        } else if (order === '-') {
            return {
                type: ORIGINAL_ORDER
            }
        }
    }
};

export const recipeDetailReset = () => {
    return {
        type: RECIPE_DETAIL_RESET
    }
};

export const filterByDiets = (diets) => {
    return {
        type: FILTER_BY_DIETS, payload: diets
    }
};

export const getDeletedRecipes = () => {
    return async (dispatch) => {
        const { data } = await axios.get(RECIPES + '/deletedRecipes');
        return dispatch({ type: GET_DELETED_RECIPES, payload: data })
    }
}

export const nextPageRedux = () => {
    return {
        type: NETX_PAGE
    }
};

export const prevPageRedux = () => {
    return {
        type: PREV_PAGE
    }
};