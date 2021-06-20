import React from "react";
import { Link } from "react-router-dom";
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
                    <Link to="/settings"><IconButton icon="settings" /></Link>
                </div>
            </header>
            <Link to="/build/0"><Build /></Link>
            <Link to="/build/0"><Build /></Link>
            <Link to="/build/0"><Build /></Link>
        </>
    )
}

export default History;
