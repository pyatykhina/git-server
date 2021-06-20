import React from "react";
import { Link } from "react-router-dom";
import "./Details.scss";

import IconButton from "../../components/IconButton";
import Build from "../../components/Build";

function Details(props) {
    return (
        <>
            <header>
                <div className="logo">
                    philip1967/my-awesome-repo
                </div>
                <div className="header-buttons">
                    <div className="header-button"><IconButton icon="rebuild" title="Rebuild" /></div>
                    <Link to="/settings"><IconButton icon="settings" /></Link>
                </div>
            </header>
            <Link to="/"><Build variant="opened" /></Link>
            <iframe className="logs"></iframe>
        </>
    )
}

export default Details;
