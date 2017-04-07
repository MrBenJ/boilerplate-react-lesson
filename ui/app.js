import React from 'react';
import ReactDOM from 'react-dom';
import RecipeApp from './recipeApp';
import './main.scss';

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<div>
			<h1>My App</h1>
			<RecipeApp />
		</div>,
		document.getElementById('app')
	);
});
