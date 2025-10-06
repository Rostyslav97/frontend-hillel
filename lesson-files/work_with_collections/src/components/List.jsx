import React from 'react';

class List extends React.Component {
    render() {
        const {data} = this.props;
        const liComponents = data.map(item => <li>{item.name}</li>)
        console.log(data)
        console.log(liComponents)
        return (
            <ul>
                {liComponents}
            </ul>
        );
    }
}
export default List;
