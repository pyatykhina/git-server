import React, {useState} from "react";
import "./TextField.scss";

import clear from "../../assets/images/clear.svg"

const TextField = ({ label, placeholder, required, variant, ...props }) => {
    const [inputValue, setInputValue] = useState("");

    const changeInput = e => {   
        e.target.classList.remove("textfield__input-error");
        variant === "inline" && setInputValue(validateNumberInput(e.target.value));
        variant !== "inline" && setInputValue(e.target.value);
    }

    const validateNumberInput = value => {
        return value.replace(/\s/g, '').replace(/[^\d]/g, '').substr(0,6) || '';
    }

    const clearInput = e => {
        e.preventDefault();
        setInputValue("");
    }

    return (
        <div className={`textfield ${variant === "inline" && "textfield-inline"}`}>
            <label htmlFor={label || placeholder} className={`textfield__label ${variant === "inline" && "textfield__label-inline"}`}>
                {label}
                {required && <span className="textfield__label-required"> *</span>}
            </label>
            <input 
                className={`textfield__input ${variant === "inline" && "textfield__input-inline"} ${required && "required"}`}
                name={label || placeholder} 
                placeholder={placeholder || label}
                value={inputValue}
                onChange={changeInput}
                {...props}
            />
            {inputValue && variant !== "inline" && <button className="textfield__clear">
                <img alt="clear" src={clear} onClick={clearInput} />
            </button>}
        </div>
    )
}

export default TextField;
