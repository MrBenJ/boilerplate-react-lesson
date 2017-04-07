import React from 'react';
import RecipeList from './recipe-list';
import Recipe from './recipe'

class SearchRecipe extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      search: ''
    }
  }

  updateSearch(evt) {
    this.setState({search: evt.target.value});
  }

  render() {
    let fitlerRecipes;

		if (this.props.recipes) {
			fitlerRecipes = this.props.recipes.map(item => {
				return item.name.includes(this.state.search);
			});
		}
    return (
      <form>
        <input type="text" value={ this.state.search } onChange={ this.updateSearch.bind(this) }/>
      </form>
    )
  }
}

export default SearchRecipe;