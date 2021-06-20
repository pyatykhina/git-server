import React from "react";
import "./Settings.scss";

import TextField from "../../components/TextField";
import Button from "../../components/Button";

function Settings() {
    return (
        <>
            <header>
                <div className="logo">
                    School CI server
                </div>
            </header>
            <div className="form">
                <h3 className="form__title">Settings</h3>
                <h4 className="form__subtitle">Configure repository connection and synchronization settings.</h4>
                <form className="form__inputs">
                    <TextField label="GitHub repository" placeholder="user-name / repo-name" required="true" />
                    <TextField label="Build command" placeholder="npm ci && npm run build" required="true" />
                    <TextField label="Main branch" placeholder="master" />
                    <TextField label="Synchronize every" placeholder="10" type="inline" />minutes

                    <div className="form__inputs-buttons">
                        <Button title="Save" />
                        <Button title="Cancel" type="secondary" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Settings;
