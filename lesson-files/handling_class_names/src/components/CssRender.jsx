import React from "react";

class CssRender extends React.Component {
    render() {
        const divStyle = {
            color: 'red',
            fontSize: '50px',
        };

        return <div style={divStyle}>Hello World!</div>;
    }
}

export default CssRender;
