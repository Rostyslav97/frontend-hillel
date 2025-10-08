import React from "react";

class HtmlRender extends React.Component {
    render() {
        const htmlString = 'This <i>text</i> should be rendered <b>"as is"</b>';
        const html = { __html: htmlString }
        return (
            <ul>
                <li dangerouslySetInnerHTML={html} />
                <li>{htmlString}</li>
            </ul>
        );
    }
}

export default HtmlRender
