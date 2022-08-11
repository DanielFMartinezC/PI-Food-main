import './App.css';
import { Route } from 'react-router-dom';
import React from "react";
import LandingPage from './components/LandingPage/LandingPage';
import RecipeList from './components/RecipeList/RecipeList';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';
import CreateRecipe from './components/CreateRecipe/CreateRecipe';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <React.Fragment>
      <Route exact path='/'component={LandingPage}/>
      <Route path='/' component={NavBar}/>
      <Route path='/Home' component={RecipeList}/>
      <Route path='/recipe/:id' component={RecipeDetail}/>
      <Route path='/CreateRecipe' component={CreateRecipe} />
    </React.Fragment>
  );
}

export default App;
