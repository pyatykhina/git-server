import React from "react";
import "./Button.scss";

const Button = ({ variant, title, icon, ...props}) => {
    return (
        <button className={`button ${variant || "primary"}`} {...props}>
            {title}
        </button>
    )
}

export default Button;
