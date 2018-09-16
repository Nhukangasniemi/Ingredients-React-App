import React, { Component } from 'react';
import './App.css';
import Dish from './Dish.js';
import AddButton from './AddButton.js';
import Filter from './Filter.js';
import Form from './Form.js'

let DISHES = [
  {id: 1, name: 'Fish Soup', ingredients: ['Salmon cubes', 'Potatoes', 'Onions'], difficulty: 'Medium'},
  {id: 2, name: 'Pancake', ingredients: ['Eggs', 'Flour', 'Milk'], difficulty: 'Easy'},
  {id: 3, name: 'Instant Noodle', ingredients: ['Noodle', 'Beef', 'Chilli'], difficulty:'Easy'}
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      meals: DISHES
    }
  }

  handleFilter = (filterInput) => {
    this.setState(filterInput);
  }

  showForm = () => {
    let display = document.getElementById("form").style.display;
    document.getElementById("form").style.display = display === "none" ? "block": "none"; 
  }

  submitDish = (input) => {
    input.id = input.name;
    this.setState((prevState) => {
      let meals = prevState.meals;
      meals[meals.length +1] = input; 
      return {meals};
    })
  }

  render() {
    let dishes = [];
    this.state.meals.forEach((dish) => {
      if(dish.name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) === -1) {
        return;
      }
      return dishes.push(<Dish val={dish} key={dish.id} searchText={this.state.searchText}/>);
    } )

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Meal Ingredients</h1>
        </header>

        <Filter
        style={{marginTop: '80px'}}
        searchText={this.state.searchText}
        onFilter={this.handleFilter}
        />

        <div className="cards">
          {dishes}
        </div>
        <AddButton showClick={this.showForm} />
        <div id="form" style={{display: 'none'}}>
            <Form onSubmit={this.submitDish}/>
        </div>
      </div>
    );
  }
}

export default App;
