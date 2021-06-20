import React from "react";
import "./IconButton.scss";

import settings from "../../assets/images/settings.svg";
import run from "../../assets/images/run.svg";
import rebuild from "../../assets/images/rebuild.svg";

const IconButton = ({ title, icon, ...props }) => {
    return (
        <button className="iconbutton" {...props}>
            <img alt={icon} src={
                icon === "settings" 
                    ? settings 
                    : icon === "run"
                        ? run 
                        : icon === "rebuild" && rebuild
            } />
            {title && <span className="iconbutton__text">{title}</span>}
        </button>
    )
}

export default IconButton;
