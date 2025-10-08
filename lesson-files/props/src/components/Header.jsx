import React from "react";

class Header extends React.Component {
    render() {
        // console.log(this.props)
        const { text } = this.props;
        return (
            <div>
                <h1>{text}</h1>
                <h2>{this.props.text}</h2>
            </div>
        );
    }
}

Header.defaultProps = {
    text: 'Header hello world!',
};

export default Header;
