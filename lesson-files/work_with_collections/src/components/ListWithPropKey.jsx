import React from 'react';

class ListWithPropKey extends React.Component {
    createList() {
        const { data } = this.props
        return data.map((item) => <li key={item.id} data-id={item.id}>{item.name}</li>)
    }

    render() {
        return (
            <ul>
                {this.createList()}
            </ul>
        );
    }
}
export default ListWithPropKey;
