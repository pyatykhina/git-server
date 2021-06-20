import React from "react";
import "./Button.scss";

const Button = ({ type, title }) => {
    return (
        <button className={`button ${type || "primary"}`} >
            {title}
        </button>
    )
}

export default Button;
