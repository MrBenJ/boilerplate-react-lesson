import React from 'react';

import './main.scss';

class RecipeApp extends React.Component {
  render() {
    const generateTableList = this.props.recipes.map((items, index) => {
      return (
        <tr key={index}>
          <td>
            {items.name}
          </td>
          <td>
            {items.directions}
          </td>
        </tr>);
    });

    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Directions</th>
            </tr>
          </thead>
          <tbody>
            {generateTableList}
          </tbody>
        </table>
      </div>
    )
  }
}

export default RecipeApp;