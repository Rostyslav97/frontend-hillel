import React from "react";

class MyUnmountingComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            intervalId: null
        }
    }
    componentDidMount() {
        if(this.state.intervalId) return;
        const intervalId = setInterval(() => {
            console.log('Hello react!')
        }, 1000)


        this.setState({intervalId})
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.state.intervalId)
        // Ідеальне місце для очищення ресурсів, таких як таймери, інтервали або підписки
    }

    render() {
        return <div>Goodbye!</div>;
    }
}

export default MyUnmountingComponent;