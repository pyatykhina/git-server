import React from "react";
import "./Button.scss";

const Button = ({ variant, title, ...props}: IButton) => {
    return (
        <button className={`button ${variant || "primary"}`} {...props}>
            {title}
        </button>
    )
}

export default Button;

interface IButton {
    variant?: "primary" | "secondary", 
    title: string,
    [otherOptions: string]: unknown;
}
