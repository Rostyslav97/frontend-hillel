import React from "react";

// this.props - Special object that contains all props passed to component
class HelloMessage extends React.Component {
    render() {
        console.log(this.props)
        return <h3><i>Hello {this.props.name}</i></h3>;
    }
}

export default HelloMessage;