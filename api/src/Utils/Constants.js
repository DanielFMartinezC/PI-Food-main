const {
    apiKey,
  } = process.env;
const complexSearch =` https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&&addRecipeInformation=true`;
// const searchById = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;

module.exports = {
    complexSearch,
    // searchById
}