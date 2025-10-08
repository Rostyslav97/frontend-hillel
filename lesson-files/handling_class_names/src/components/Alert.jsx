import React from "react";

class Alert extends React.Component {
    static defaultProps = {
        type: null
    }

    render() {
        const { children, type } = this.props;

        console.log(children)

        return (
            <div className='container'>
                <div className='row'>
                    {type &&
                        <div className={"alert alert-" + type}>
                            {children}
                        </div>
                    }
                </div>
            </div>
        );
    }
}
//
// Alert.defaultProps = {
//     type: null
// }

export default Alert;
