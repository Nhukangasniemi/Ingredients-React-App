import React from 'react';

class Filter extends React.Component {

    handleChange = (e) => {
        const value = e.target.value;
        this.props.onFilter(value);
    }

    render() {
        return (
            <input type="text" placeholder="Search..." 
            value={this.props.searchText}
            style={{height: "25px"}}
            onChange={this.handleChange} />
        )
    }
}

export default Filter;