import React from "react";

class Alert extends React.Component {
    render() {
        console.log(this.props)

        const exampleObj = {
            engine: 'V*',
            ...this.props
        }
        console.log(exampleObj)

        return <div
            className="alert"
            {...exampleObj}
        >
            <b
                {...this.props}
            >
                <u>This is alert component</u>
            </b>
        </div>;
    }
}

export default Alert;
