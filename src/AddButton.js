import React from 'react';
import Form from './Form';

class AddButton extends React.Component {

    showForm = () => {
        document.getElementById("form").style.display = 'block';
    }
    render() {
        return(
            <div>
                <button onClick={this.showForm}>Add Dish</button>
                <div id="form" style={{display: 'none'}}>
                    <Form />
                </div>
            </div>
        )
    }

}

export default AddButton;