import React from "react";

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: this.props.text };
    }

    onChange = (e) => {
        this.setState({ text: e.target.value });
    };

    render() {
        return (
            <textarea
                onChange={this.onChange}
                value={this.state.text}
            />
        );
    }
}

export default Editor;