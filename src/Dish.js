import React from 'react';

class Dish extends React.Component {

    render() {
        let ingredients = this.props.val.ingredients;
        let output = [];
        ingredients.forEach((ingredient) => {
            output.push(<p key={ingredient}>{ingredient}</p>);
        });

        return (
        <div className="dish">
            <h3>{this.props.val.name}</h3>
            <h4>Ingredients</h4>
            <div style={{marginTop: '15px'}}>{output}</div>
            <div style={{backgroundColor: '#e7e7e7', padding: '10px'}}>Degree of difficulty: {this.props.val.difficulty}</div>
        </div>
        )
    }
}

export default Dish;