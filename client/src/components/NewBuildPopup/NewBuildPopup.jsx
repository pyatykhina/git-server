import React from "react";
import "./NewBuildPopup.scss";

import TextField from "../../components/TextField";
import Button from "../../components/Button";

const NewBuildPopup = props => {
    const runBuild = e => {
        e.preventDefault();
    }

    return (
        <div className="newbuild">
            <form className="newbuild__form" onSubmit={runBuild}>
                <h3 className="newbuild__form-title">New build</h3>
                <h4 className="newbuild__form-subtitle">Enter the commit hash which you want to build.</h4>
                <TextField placeholder="Commit hash" />
                <div className="newbuild__form-buttons">
                    <div className="newbuild__form-buttons-button"><Button title="Run build" type="submit" /></div>
                    <Button title="Cancel" variant="secondary" onClick={props.onClose}/>
                </div>
            </form>
        </div>
    )
}

export default NewBuildPopup;
