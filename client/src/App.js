import './App.css';
import { Route } from 'react-router-dom';
import React from "react";
import LandingPage from './components/LandingPage/LandingPage';
import RecipeList from './components/RecipeList/RecipeList';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';
import CreateRecipe from './components/CreateRecipe/CreateRecipe';

function App() {
  return (
    <React.Fragment>
      <Route exact path='/'component={LandingPage}/>
      <Route path='/home' component={RecipeList}/>
      <Route path='/recipe/:id' component={RecipeDetail}/>
      <Route path='/createRecipe' component={CreateRecipe} />
    </React.Fragment>
  );
}

export default App;
