import React from 'react';

const origin = {id: "", name: "", ingredients: [], difficulty: ""};
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: Object.assign({}, origin)
        }
    }

    handleChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        if(name === "ingredients") {
            value = e.target.value.split(",");
        }
        this.setState((prevState) => {
            prevState.product[name]= value;
            return {product: prevState.product};
        })
    }

    handleSave = (e) => {
        this.props.onSubmit(this.state.product);
        this.setState({
            product: Object.assign({}, origin)
        });
        e.preventDefault();
    }

    render() {
        return (
            <form>
                <p>
                    Name
                    <br />
                    <input type="text" name="name" onChange={this.handleChange} value={this.state.product.name}/>
                </p>
                <p>
                    Ingredients <br />
                    <input type="text" placeholder="Seperate by comma" name="ingredients" 
                    value={this.state.product.ingredients}
                    onChange={this.handleChange}/>
                </p>
                <p>Degree of difficulty <br />
                    <input type="text" placeholder="Easy, Medium or Hard" name="difficulty" 
                    value={this.state.product.difficulty}
                    onChange={this.handleChange} />
                </p>
                <input type="submit" value="Submit" onClick={this.handleSave} />
            </form>
        )
    }
}

export default Form;