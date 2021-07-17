import React from "react";
import "./IconButton.scss";

import settings from "../../assets/images/settings.svg";
import run from "../../assets/images/run.svg";
import rebuild from "../../assets/images/rebuild.svg";

const IconButton = ({ title, icon, ...props }: IIconButton) => {
    let iconLink;

    switch(icon) {
        case "settings": {
            iconLink = settings;
            break;
        }
        case "run": {
            iconLink = run;
            break;
        }
        case "rebuild": {
            iconLink = rebuild;
            break;
        }
    }

    return (
        <button className="iconbutton" {...props}>
            <img alt={icon} src={iconLink} />
            {title && <span className="iconbutton__text">{title}</span>}
        </button>
    )
}

export default IconButton;

interface IIconButton {
    title?: string,
    icon: string,
    [otherOptions: string]: unknown;
}
