import React from "react";

class MyUpdatingComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    // 1
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return null; // Повертає новий стан або null
    }

    // 2
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('shouldComponentUpdate');
    //     return true; // Визначає, чи потрібно перерендерити компонент
    // }

    // 3
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return null; // Може повернути значення, яке передасться у componentDidUpdate
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
        // Викликається після оновлення компонента
    }

    increment = () => {
        this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    };

    //4
    render() {
        console.log('Render');
        return (
            <div>
                <p>Counter: {this.state.counter}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default MyUpdatingComponent;