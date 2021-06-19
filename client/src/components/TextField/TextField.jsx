import React from "react";
import "./TextField.scss";

const TextField = ({ label, placeholder, required }) => {
    return (
        <div className="textfield">
            <label htmlFor={label || placeholder} className="textfield__label">
                {label || placeholder}
                {required === true && <span className="textfield__label-required"> *</span>}
            </label>
            <input 
                className="textfield__input"
                name={label || placeholder} 
                placeholder={placeholder || label}
            />
        </div>
    )
}

export default TextField;
