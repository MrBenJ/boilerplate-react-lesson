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
      selectVal: '',
      recipeList: [
        {
          name: 'Banana Pudding',
          ingrediants: ['eggs', 'butter', 'bread', 'lard'],
          directions: 'Do this with the banana pudding like this'
        },
        {
          name: 'Salad',
          ingrediants: ['lettuce', 'tomatoes', 'vinegar'],
          directions: 'Do this with the Salad like this'
        },
        {
          name: 'Hamburgers',
          ingrediants: ['cheese', 'lettuce', 'tomatoes', 'ketchup'],
          directions: 'Do this with the banana pudding like this'
        },
        {
          name: 'French Toast',
          ingrediants: ['eggs', 'butter', 'bread', 'sugar', 'syrup'],
          directions: 'Do this with the banana pudding like this'
        },
        {
          name: 'Hot Fudge Sundae',
          ingrediants: ['fudge', 'ice-cream', 'chocolate', 'milk'],
          directions: 'Do this with the banana pudding like this'
        }]
    })
  }

  updateSearch(evt) {
    this.setState({
      searchVal: evt.target.value,
      recipeList: this.state.recipeList.filter(list => list.name.match(new RegExp(this.state.searchVal, 'ig')))
    });

    console.log(this.state.recipeList);
  }

  updateSelect(evt) {
    this.setState({
      selectVal: evt.target.value
    });

    console.log(this.state.selectVal);
  }

  render() {

     let getIngrediants = [];

     const ingrediants = this.state.recipeList
       .map(items => items.ingrediants.forEach(items => getIngrediants.push(items)));

     getIngrediants = getIngrediants.filter((items, idx, arr) => {
       return arr.indexOf(items) === idx;
     });

    let generateSelect = getIngrediants.map((item, idx, arr) => {
      return (<option value={item} key={idx}>{item}</option>);
    });

    return (
      <div>
        <select name="recipe-lists" value={this.state.selectVal} onChange={this.updateSelect}>
          {generateSelect}
        </select>
        <input type="text" value={this.state.searchVal} onChange={this.updateSearch} />
        <RecipeApp recipes={this.state.recipeList.map(items => items)} />
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<div>
			<h1>Recipe Application</h1>
			<App />
		</div>,
		document.getElementById('app')
	);
});