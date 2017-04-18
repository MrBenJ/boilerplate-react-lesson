import React from 'react';
import ReactDOM from 'react-dom';
import RecipeApp from './recipeApp';
import './main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.updateSearch = this.updateSearch.bind(this);
    this.updateSelect = this.updateSelect.bind(this);
  }

  componentWillMount() {
    this.setState({
      searchVal: '',
      selectVal: ''
    });
  }

  updateSearch(evt) {
    this.setState({
      searchVal: evt.target.value
    });
  }

  updateSelect(evt) {
    this.setState({
      selectVal: evt.target.value
    });
  }

  render() {
    // Generate options for select menu and store into a variable
    const generateOptions = (arr) => {
      return arr.map((item, idx) =>
        (<option value={item} key={idx}>{item}</option>)
      );

    }
    const getIngredients = recipes => {
      let options = [];

      recipes.forEach((ingred) => {
        ingred.ingredients.forEach(item => {
          if (!options.includes(item)) {
            options.push(item);
          }
        })
      })
      return generateOptions(options);
    }

    let ingredients = getIngredients(this.props.recipes);

    const filteredSearch = food => {
      return food.filter(list => {
        if (list.name.match(new RegExp(this.state.searchVal, 'ig'))) {
          return true;
        }
        else {
          return false;
        }
      });
    }

    const filterTable = foodData => {
      let allFoodData = foodData;
      let filterSearch = filteredSearch(foodData);
      let search = this.state.searchVal;
      let select = this.state.selectVal;

      if (select) {
        filterSearch = filterSearch.filter(list => {
          if (list.ingredients.includes(select)) {
            return true;
          }
          else {
            return false;
          }
        });
      }

      return search || select ? filterSearch : allFoodData;
    }

    let filtering = filterTable(this.props.recipes);

    return (
      <div>
        <select name="recipe-lists" value={this.state.selectVal} onChange={this.updateSelect}>
          <option value="">All</option>
          {ingredients}
        </select>
        <input type="text" value={this.state.searchVal} onChange={this.updateSearch} />
        <RecipeApp recipes={filtering} />
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {

  const data = [
    {
      name: 'Banana Pudding',
      ingredients: ['eggs', 'butter', 'bread', 'lard'],
      directions: 'Do this with the banana pudding like this'
    },
    {
      name: 'Salad',
      ingredients: ['lettuce', 'tomatoes', 'vinegar'],
      directions: 'Do this with the Salad like this'
    },
    {
      name: 'Hamburgers',
      ingredients: ['cheese', 'lettuce', 'tomatoes', 'ketchup'],
      directions: 'Do this with the banana pudding like this'
    },
    {
      name: 'French Toast',
      ingredients: ['eggs', 'butter', 'bread', 'sugar', 'syrup'],
      directions: 'Do this with the banana pudding like this'
    },
    {
      name: 'Hot Fudge Sundae',
      ingredients: ['fudge', 'ice-cream', 'chocolate', 'milk'],
      directions: 'Do this with the banana pudding like this'
    }];

  ReactDOM.render(
    <div>
      <h1>Recipe Application</h1>
      <App
        recipes={data} />
    </div>,
    document.getElementById('app')
  );
});
