import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form>
                <p>
                    Name
                    <br />
                    <input type="text" name="name" />
                </p>
                <p>
                    Ingredients <br />
                    <input type="text" placeholder="Seperate by comma" />
                </p>
                <p>Degree of difficulty <br />
                    <input type="text" placeholder="Easy, Medium or Hard" />
                </p>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Form;