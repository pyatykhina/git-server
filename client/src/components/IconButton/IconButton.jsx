import React from "react";
import "./IconButton.scss";

import settings from "../../assets/images/settings.svg";
import run from "../../assets/images/run.svg";

const IconButton = ({ title, icon }) => {
    return (
        <button className="iconbutton" >
            <img alt={icon} src={
                icon === "settings" 
                    ? settings 
                    : icon === "run" && run
            } />
            {title && <span className="iconbutton__text">{title}</span>}
        </button>
    )
}

export default IconButton;
