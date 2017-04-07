import React from 'react';
import ReactDOM from 'react-dom';
import RecipeApp from './recipeApp';
import './main.scss';

document.addEventListener('DOMContentLoaded', () => {
    const recipes = [
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
    }];
	ReactDOM.render(
		<div>
			<h1>My App</h1>
			<RecipeApp
                recipes={recipes} />
		</div>,
		document.getElementById('app')
	);
});
