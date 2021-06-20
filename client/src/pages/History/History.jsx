import React from "react";
import "./History.scss";

import IconButton from "../../components/IconButton";
import Build from "../../components/Build";

function History() {
    return (
        <>
            <header>
                <div className="logo">
                    philip1967/my-awesome-repo
                </div>
                <div className="header-buttons">
                    <div className="header-button"><IconButton icon="run" title="Run build" /></div>
                    <IconButton icon="settings" />
                </div>
            </header>
            <Build />
        </>
    )
}

export default History;
