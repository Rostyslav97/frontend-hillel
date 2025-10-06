import React from "react";

class HelloMessage extends React.Component {
    render() {
        return <h3><i>Hello {this.props.name}</i></h3>;
    }
}

export default HelloMessage;