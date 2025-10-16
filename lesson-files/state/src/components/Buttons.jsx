import React from "react";
import classNames from "classnames";


class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            primary: false
        };
    }

    onIncrement = () => {
        this.setState(({ count }) => ({ count: count + 1 }));
    };

    onChangeClass = () => {
        this.setState(({ primary }) => ({ primary: !primary }));
    };

    // onClickBtn = () => {
    //     this.onIncrement()
    //     this.onChangeClass()
    // }

    render() {
        const buttonClass = classNames('btn m-3', {
            'btn-primary': this.state.primary,
            'btn-secondary': !this.state.primary,
        });


        return <div>
            <button className={buttonClass} onClick={this.onIncrement}>
                count: {this.state.count}
            </button>
            <button className={buttonClass} onClick={this.onChangeClass}>
                button
            </button>
        </div>;
    }
}

export default Buttons;
