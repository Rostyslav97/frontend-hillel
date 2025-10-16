import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text,
            description: '',
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(`A name was submitted: ${JSON.stringify(this.state)}`);
    };

    handleChange = (e) => {
        const val = {
            [e.target.name]: e.target.value,
        }

        this.setState(val);
    };


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name='text'
                    onChange={this.handleChange}
                    value={this.state.text}
                />
                <br/>
                <input
                    name='description'
                    onChange={this.handleChange}
                    value={this.state.description}
                />
                <br/>
                <input type='submit' value='Submit' />
            </form>
        );
    }
}

export default Form;