import React from "react";
import "./Details.scss";

import IconButton from "../../components/IconButton";

function Details(props) {
    return (
        <>
            <header>
                <div className="logo">
                    philip1967/my-awesome-repo
                </div>
                <div className="header-buttons">
                    <div className="header-button"><IconButton icon="rebuild" title="Rebuild" /></div>
                    <IconButton icon="settings" />
                </div>
            </header>
            <div>Details {props.match.params.number}</div>
        </>
    )
}

export default Details;
