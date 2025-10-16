import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <p>Лічильник: {this.state.count}</p>
                {this.state.count === 10 && <p>Supper pupper!</p>}
                <button onClick={this.increment}>Збільшити</button>
            </div>
        );
    }
}

export default Counter;