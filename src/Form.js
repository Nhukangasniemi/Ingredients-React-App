import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form>
                <h3>Add A New Dish</h3>
                <p>
                    Name
                    <br />
                    <input type="text" name="name" />
                </p>
            </form>
        )
    }
}

export default Form;