import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Settings.scss";
import { editSettings } from "../../redux/middlewares";
import { useSelector } from "react-redux";
import { useAppThunkDispatch } from "../../redux/store";

import TextField from "../../components/TextField";
import Button from "../../components/Button";

function Settings() {
    const dispatch = useAppThunkDispatch();
    const history = useHistory();
    const [disabledButtons, setDisabledButtons] = useState(false);
    const [cloningError, setCloningError] = useState("");
    const settings = useSelector(state => state.settings);

    const saveSettings = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const inputs = document.getElementsByClassName("textfield__input");
        for (let input of inputs) {
            input.classList.contains("required") && (input as HTMLInputElement).value === "" && input.classList.add("textfield__input-error");
        }

        const config = {
            repoName: inputs["repoName"].value,
            buildCommand: inputs["buildCommand"].value,
            mainBranch: inputs["mainBranch"].value || "master",
            period: inputs["period"].value || 10
        };

        setDisabledButtons(true);

        dispatch(editSettings(config))
            .then(response => {
                if (response.status === 500) {
                    setCloningError(response.data.error);
                    setDisabledButtons(false);
                } else {
                    history.push("/");
                }
            })
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
                    <TextField name="repoName" label="GitHub repository" placeholder="user-name / repo-name" required="true" initialValue={settings.repoName} />
                    <TextField name="buildCommand" label="Build command" placeholder="npm ci && npm run build" required="true" initialValue={settings.buildCommand} />
                    <TextField name="mainBranch" label="Main branch" placeholder="master" initialValue={settings.mainBranch} />
                    <TextField name="period" label="Synchronize every" placeholder="10" variant="inline" initialValue={settings.period.toString()} />minutes

                    {cloningError && <h4 className="form__subtitle" style={{ color: "#FF3333" }}>{cloningError}</h4>}
                    <div className="form__inputs-buttons">
                        <div className="form__inputs-buttons-button"><Button title="Save" type="submit" disabled={disabledButtons} /></div>
                        <Link to="/"><Button title="Cancel" variant="secondary" disabled={disabledButtons} /></Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Settings;