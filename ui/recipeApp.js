import React from 'react';

// import SearchRecipe from './components/recipe-filter';
import Recipe from './components/recipe';
import './main.scss';

class RecipeApp extends React.Component {
  constructor(props) {
    super(props);

    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(evt) {
    this.setState({
      search: evt.target.value
    });
  }

  componentWillMount() {

    this.setState({
      search: ''
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch}
        />
        <Recipe recipes={this.props.recipes.filter( (item) => {
          return item.name.match(new RegExp(this.state.search, 'ig'));
        })} />
      </div>
    )
  }
}

export default RecipeApp;
