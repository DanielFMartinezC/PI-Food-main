const {
    apiKey,
  } = process.env;
const complexSearch =` https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;
// const searchById = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;

module.exports = {
    complexSearch,
    // searchById
}