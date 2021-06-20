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
                <IconButton icon="run" title="Run build" />
                <IconButton icon="settings" />
            </header>
            <Build />
        </>
    )
}

export default History;
