import React from "react";

class Button extends React.Component {
    render () {
        const { isPressed, isHovered, label } = this.props;

        let btnClass = 'btn btn-warning';

        if (isPressed) {
            btnClass += ' btn-pressed';
        } else if (isHovered) {
            btnClass += ' btn-over';
        }


        // document.classList.add(className)
        // document.classList.remove(className)
        // document.classList.has(className)

        return <button className={btnClass}>{label}</button>;
    }
}

export default Button;
