import React from 'react';

class Section extends React.Component {
    render() {
        const { header, body } = this.props;

        return (
            <div className='section-1'>
                <h2>{header}</h2>
                <div>{body}</div>
            </div>
        );
    }
}

export default Section;
