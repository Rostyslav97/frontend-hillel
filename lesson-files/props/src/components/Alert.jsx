import React from "react";

class Alert extends React.Component {
    render() {
        console.log(this.props)
        return <div
            className="alert"
            {...this.props}
        >
            <b
                name={this.props.name}
                quantity={this.props.quantity}
                type={this.props.type}
            >
                <u>This is alert component</u>
            </b>
        </div>;
    }
}

export default Alert;
