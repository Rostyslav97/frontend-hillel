import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            count: 100,
        };
    }

    handleClick = () => {
        this.setState({ date: new Date() });
    }

    render() {
        const {date} = this.state

        return (
            <div>
                <p>It is {date.toLocaleTimeString()}.</p>
                <button
                    type="button"
                    onClick={this.handleClick}
                >
                    refresh
                </button>
            </div>
        );
    }

}

export default Clock;
