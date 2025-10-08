import React from 'react';

class List extends React.Component {
    render() {
        const {data} = this.props;
        console.log(data)

        const items = data.map(item => <li>{item.name}</li>)

        console.log(items)
        //
        // const arrOfNames = [
        //     <li>Vova</li>,
        //     <li>Alise</li>,
        //     <li>Ann</li>
        // ]

        return (
            <ul>
                {items}
            </ul>
        );
    }
}
export default List;
