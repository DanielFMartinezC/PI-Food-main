const {
  apiKey,
} = process.env;
const number = 100;
const complexSearch = ` https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true&number=${number}`;

module.exports = {
  complexSearch,
}