import React from "react";

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            arr: [1, 2, 3]
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        console.log(event)
        this.setState({ count: this.state.count + 1 });
    };


    handleClickSpan = (e) => {
        console.log(e.target.innerHTML)
    }

    render() {
        const {arr} = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <button type="submit">{`${this.state.count} clicks`}</button>
                {arr && arr.map((item) => {
                    return <span key={item} onClick={this.handleClickSpan}>{item}</span>
                })}
            </form>
        );
    }
}

export default Component;
