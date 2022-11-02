import { GET_RECIPES, FILTER_BY_DIETS, GET_RECIPES_BY_NAME, GET_RECIPE_DETAIL, GET_DIETS, ORDER_ASCE, ORDER_DESCE, HEALTH_ASCE, HEALTH_DESCE, ORIGINAL_ORDER, RECIPE_DETAIL_RESET, GET_DELETED_RECIPES, NETX_PAGE, PREV_PAGE, nextPage } from '../actions/index';

function compareFunctionByTitle(x, y) {
    if (x.title < y.title) {
        return -1
    } else if (x.title > y.title) {
        return 1
    };
    return 0
};

function compareFunctionByHealthScore(x, y) {
    if (x.healthScore < y.healthScore) {
        return -1
    } else if (x.healthScore > y.healthScore) {
        return 1
    };
    return compareFunctionByTitle(y, x)
};

const initialState = {
    recipes: [],
    orderRecipes: [],
    diets: [],
    recipeDetail: {},
    deletedRecipes: [],
    page: 0
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload,
                orderRecipes: action.payload
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
        case ORIGINAL_ORDER:
            return {
                ...state,
                recipes: state.orderRecipes
            };
        case ORDER_ASCE:
            var save = [...state.recipes]
            return {
                ...state,
                recipes: save.sort(compareFunctionByTitle)
            };
        case ORDER_DESCE:
            save = [...state.recipes]
            return {
                ...state,
                recipes: save.sort(compareFunctionByTitle).reverse()
            };
        case HEALTH_ASCE:
            save = [...state.recipes]
            return {
                ...state,
                recipes: save.sort(compareFunctionByHealthScore)
            };
        case HEALTH_DESCE:
            save = [...state.recipes]
            return {
                ...state,
                recipes: save.sort(compareFunctionByHealthScore).reverse()
            };
        case FILTER_BY_DIETS:
            const { payload } = action;
            if (!payload.length) {
                return {
                    ...state,
                    recipes: state.orderRecipes
                }
            }
            let filteredRecipes = [];
            // for (let i = 0; i < payload.length; i++) {
            //     filteredRecipes = filteredRecipes.concat(state.orderRecipes.filter(x => x.diets[j]['name'] === payload[i]));
            // };
            for (let i = 0; i < payload.length; i++) {
                filteredRecipes = filteredRecipes.concat(state.orderRecipes.filter(function (x) {
                    for (let j = 0; j < x.diets.length; j++) {
                        if (x.diets[j]['name'] === payload[i]) {
                            return true
                        }
                    }
                }));
            };
            const set = new Set(filteredRecipes)
            const response = [...set];
            return {
                ...state,
                recipes: response
            };
        case RECIPE_DETAIL_RESET:
            return {
                ...state,
                recipeDetail: {}
            };
        case GET_DELETED_RECIPES:
            return {
                ...state,
                deletedRecipes: action.payload
            };
        case NETX_PAGE:
            if (state.recipes[state.page + 9]) {
                return {
                    ...state,
                    page: state.page + 9
                };
            } else {
                return {
                    ...state
                }
            };
        case PREV_PAGE:
            if(state.page > 0) {
                return {
                    ...state,
                    page: state.page - 9
                };
            } else {
                return {
                    ...state
                }
            };
    }
};

export default rootReducer;