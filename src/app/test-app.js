import React from 'react';

export class TestApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {vladko: ''};
        this.testField = "We Rock! \_/";
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return ( <div className = "container" >
            <h1> { this.testField } </h1>

            <h2> Vladi e { this.state.vladko }</h2>

            <form className = "row"> 
                <input type = "text" className = "form-control" placeholder = "Vladko e?" onChange = { this.handleChange }/>
            </form> 

            </div>
        );
    }

    handleChange(e) {
        this.setState({vladko : e.target.value});
    }
}