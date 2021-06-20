import React from "react";
import "./Settings.scss";

import TextField from "../../components/TextField";
import Button from "../../components/Button";

function Settings() {
    const saveSettings = e => {
        e.preventDefault();
        const inputs = document.getElementsByClassName("textfield__input");
        for (let input of inputs) {
            input.classList.contains("required") && input.value === "" && input.classList.add("textfield__input-error");
        }
    }

    return (
        <>
            <header>
                <div className="logo-light">
                    School CI server
                </div>
            </header>
            <div className="form">
                <h3 className="form__title">Settings</h3>
                <h4 className="form__subtitle">Configure repository connection and synchronization settings.</h4>
                <form className="form__inputs" onSubmit={saveSettings}>
                    <TextField label="GitHub repository" placeholder="user-name / repo-name" required="true" />
                    <TextField label="Build command" placeholder="npm ci && npm run build" required="true" />
                    <TextField label="Main branch" placeholder="master" />
                    <TextField label="Synchronize every" placeholder="10" variant="inline" />minutes

                    <div className="form__inputs-buttons">
                        <div className="form__inputs-buttons-button"><Button title="Save" type="submit" /></div>
                        <Button title="Cancel" variant="secondary" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Settings;
