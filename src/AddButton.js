import React from 'react';

class AddButton extends React.Component {

    render() {
        return(
            <div>
                <button onClick={this.props.showClick}>Add Dish</button>
            </div>
        )
    }

}

export default AddButton;