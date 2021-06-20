import React, {useState} from "react";
import "./TextField.scss";

import clear from "../../assets/images/clear.svg"

const TextField = ({ label, placeholder, required, type }) => {
    const [inputValue, setInputValue] = useState("");

    const changeInput = e => {
        setInputValue(e.target.value);
    }

    const clearInput = e => {
        e.preventDefault();
        setInputValue("");
    }

    return (
        <div className={`textfield ${type === "inline" && "textfield-inline"}`}>
            <label htmlFor={label || placeholder} className={`textfield__label ${type === "inline" && "textfield__label-inline"}`}>
                {label || placeholder}
                {required && <span className="textfield__label-required"> *</span>}
            </label>
            <input 
                className={`textfield__input ${type === "inline" && "textfield__input-inline"}`}
                name={label || placeholder} 
                placeholder={placeholder || label}
                value={inputValue}
                onChange={changeInput}
            />
            {inputValue && type !== "inline" && <button className="textfield__clear">
                <img alt="clear" src={clear} onClick={clearInput} />
            </button>}
        </div>
    )
}

export default TextField;
