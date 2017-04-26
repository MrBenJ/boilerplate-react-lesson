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

    const filterByString = food => {
      const searchTerm = new RegExp(this.state.searchVal, 'ig');
      return food.filter(list => list.name.match(searchTerm));
    }

    /**
     * filterTable(prop.recipes)
     * Filters the recipes twice, once by string via filterByString(), and the select menu's value
     *
     * @param  {Array} allFoodData - An array of the 'recipes' prop that's passed in from the root component level
     * @return {Array}             - Array filtered by string and select menu value
     */
    const filterTable = allFoodData => {
      // Note: Filtered one time by filterByString();
      let filterSearch = filterByString(allFoodData);
      let searchVal = this.state.searchVal;
      let selectVal = this.state.selectVal;

      if(searchVal) { return searchVal;}
      if (selectVal) {
        filterSearch = filterSearch.filter(list => list.ingredients.includes(selectVal));
      }

      return selectVal ? filterSearch : allFoodData;
    }

    return (
      <div>
        <select name="recipe-lists" value={this.state.selectVal} onChange={this.updateSelect}>
          <option value="">All</option>
          {ingredients}
        </select>
        <input type="text" value={this.state.searchVal} onChange={this.updateSearch} />
        <RecipeApp recipes={filterTable(this.props.recipes)} />
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


//route

// let MongoClient = require('mongodb').MongoClient;

// let db = 'mongodb://localhost:27017/my_test_data';

// app.get('/data', (req, res) => {
//   MongoClient.connect(db, (err, inst) => {
//     if(!err) {
//       let result = inst.findAll({}).toArray();
//       res.send(result);

//     } else { console.error(err);}


//   })

// });


// function getJSON(url) {
//   return new Promise( (resolve, reject) => {
//     let xhr = new XMLHttpRequest();

//     xhr.open('POST', 'http://www.google.com/');
//     xhr.setRequestHeader('Pragma', 'no-cache');
//     xhr.setRequestHeader('Cache-Control', 'no-cache, no-store');

//     xhr.onreadystatechange = () => {
//       if(xhr.readyState < 4) {
//         return;
//       }

//       if(xhr.status !== 200) {
//         console.error('Error!');
//         return;
//       }

//       if(xhr.readyState === 4) {
//         console.log('It worked!');
//         return xhr.response;
//       }
//     }

//     xhr.send(data);
//       });
// }
