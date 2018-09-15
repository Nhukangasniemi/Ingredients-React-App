import React from 'react';

class Form extends React.Component {

    handleSave = (e) => {
        let name = document.getElementById("name").value;
        let elements = document.getElementById("elements").value.split(",");
        let difficulty = document.getElementById("difficulty").value;
        e.preventDefault();
        let newElement = {
            id: name,
            name: name,
            ingredients: elements,
            difficulty: difficulty 
        }
        this.props.onSubmit(newElement);
    }

    render() {
        return (
            <form>
                <p>
                    Name
                    <br />
                    <input type="text" id="name" />
                </p>
                <p>
                    Ingredients <br />
                    <input type="text" placeholder="Seperate by comma" id="elements" />
                </p>
                <p>Degree of difficulty <br />
                    <input type="text" placeholder="Easy, Medium or Hard" id="difficulty" />
                </p>
                <input type="submit" value="Submit" onClick={this.handleSave} />
            </form>
        )
    }
}

export default Form;