import React from 'react';

class ListSeparateMethod extends React.Component {
    createList() {
        const { data } = this.props
        return data.map(item => <li>{item.name}</li>);
    }

    render() {
        return (
            <ul>
               {this.createList()}
            </ul>
        );
    }
}

export default ListSeparateMethod;
