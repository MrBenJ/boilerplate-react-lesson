import React from 'react';
import ReactDOM from 'react-dom';

import SearchRecipe from './components/recipe-filter';
import Recipe from './components/recipe';
import './main.scss';

class RecipeApp extends React.Component {
  constructor() {

    super();

    this.state = {
      recipes: [
        {
          name: 'Banana Pudding',
          ingrediants: ['eggs', 'butter', 'bread', 'lard'],
          directions: 'Do this with the banana pudding like this'
        },
        {
          name: 'Salad',
          ingrediants: ['eggs', 'butter', 'bread', 'lard'],
          directions: 'Do this with the banana pudding like this'
        },
        {
          name: 'Hamburgers',
          ingrediants: ['eggs', 'butter', 'bread', 'lard'],
          directions: 'Do this with the banana pudding like this'
        },
        {
          name: 'French Toast',
          ingrediants: ['eggs', 'butter', 'bread', 'lard'],
          directions: 'Do this with the banana pudding like this'
        },
        {
          name: 'Hot Fudge Sundae',
          ingrediants: ['eggs', 'butter', 'bread', 'lard'],
          directions: 'Do this with the banana pudding like this'
        }]
    };
  }
  render() {
    console.log(this.state.recipes)
    return (
      <div>
        <SearchRecipe />
        <Recipe recipes={this.state.recipes} />
      </div>
    )
  }
}

export default RecipeApp;