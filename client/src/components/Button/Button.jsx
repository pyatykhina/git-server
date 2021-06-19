import React from "react";
import "./Button.scss";

const Button = props => {
    return (
        <button className={props.type}>
            {props.title}
        </button>
    )
}

export default Button;
