import React from "react";
import { Link } from "react-router-dom";
import "./Start.scss";

import Button from "../../components/Button";
import IconButton from "../../components/IconButton";
import start from "../../assets/images/start.svg";

function Start() {
    return (
        <>
            <header>
                <div className="logo-light">
                    School CI server
                </div>
                <Link to="/settings"><IconButton title="Settings" icon="settings" /></Link>
            </header>
            <div className="start">
                <img alt="start" src={start} className="start__image" />
                <h4 className="start__subtitle">Configure repository connection and synchronization settings</h4>
                <Link to="/settings"><Button title="Open settings" /></Link>
            </div>
        </>
    )
}

export default Start;
