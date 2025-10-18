import React from "react";

class MyMountingComponent extends React.Component {
    // 1
    constructor(props) {
        super(props); // Ініціалізація пропсів
        this.state = { data: null }; // Встановлення початкового стану
        console.log('Constructor');
    }

    //2
    // static getDerivedStateFromProps(props, state) {
    //     console.log('getDerivedStateFromProps');
    //     return null; // Повертає новий стан або null
    // }


    //4
    componentDidMount() {
        console.log('componentDidMount');
        // Ідеальне місце для запитів до API
        fetch('/api/data')
            .then((response) => response.json())
            .then((data) => this.setState({ data }));
    }


    //3
    render() {
        console.log('Render');
        return <div>{this.state.data ? this.state.data : 'Loading...'}</div>;
    }
}
export default MyMountingComponent;