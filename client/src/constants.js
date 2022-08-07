const URL_BASE = 'http://localhost:3001';
const RECIPES = URL_BASE + '/recipes';
const RECIPES_BY_NAME = RECIPES + '?name=';
const RECIPE_DETAIL = RECIPES + '/'
const ALL_DIETS = URL_BASE + '/diets';

module.exports = {
    RECIPES,
    RECIPES_BY_NAME,
    RECIPE_DETAIL,
    ALL_DIETS
}