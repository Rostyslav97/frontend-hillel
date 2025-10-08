import React from "react";
import classNames from "classnames";

class ButtonCN extends React.Component {
    render() {
        const { isPressed, isHovered, label } = this.props;

        const btnClass = classNames(
            'btn btn-primary',
            {
                'btn-pressed': isPressed,
                'btn-over': isHovered,
            }
        );

        console.log(btnClass)

        return <button className={btnClass}>{label}</button>;
    }
}
export default ButtonCN;
