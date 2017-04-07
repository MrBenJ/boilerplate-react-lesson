import React from 'react';

class RecipeList extends React.Component {
  
  render() {
    return (
      <ul>
        <li>{this.props.recipe.name} - {this.props.recipe.directions}</li>
      </ul>
    )
  }
}

export default RecipeList;