import React, { Component } from 'react';
import './App.css';
import Dish from './Dish.js';
import AddButton from './AddButton.js';

let DISHES = {
  '1': {id: 1, name: 'Fish Soup', ingredients: ['Salmon cubes', 'Potatoes', 'Onions']},
  '2': {id: 2, name: 'Pancake', ingredients: ['Eggs', 'Flour', 'Milk']},
  '3': {id: 3, name: 'Instant Noodle', ingredients: ['Noodle', 'Beef', 'Chilli']}
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Meal Ingredients</h1>
        </header>
        <div className="App-intro">
          <Dish />
          <Dish />
          <Dish />
        </div>
        <AddButton />
      </div>
    );
  }
}

export default App;
