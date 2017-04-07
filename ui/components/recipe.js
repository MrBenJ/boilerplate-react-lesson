import React from 'react';
import RecipeList from './recipe-list';

class Recipe extends React.Component {

	render() {
		let getRecipes;

		if (this.props.recipes) {
			getRecipes = this.props.recipes.map(lists => {
				return (
					<RecipeList key={lists.name} recipe={ lists } />
				)
			});
		}
		return(
			<div>
			  { getRecipes }
			</div>
		)
	}
}

export default Recipe;