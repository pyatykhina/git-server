import React from "react";
import "./Button.scss";

const Button = ({ type, title }) => {
    return (
        <button className={type}>
            {title}
        </button>
    )
}

export default Button;
