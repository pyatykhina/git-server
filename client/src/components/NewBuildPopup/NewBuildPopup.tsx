import React from "react";
import { useHistory } from "react-router-dom";
import "./NewBuildPopup.scss";
import { addBuildToQueue } from "../../redux/middlewares";
import { useAppThunkDispatch } from "../../redux/store";

import TextField from "../../components/TextField";
import Button from "../../components/Button";

const NewBuildPopup = (props: {onClose: () => void}) => {
    const dispatch = useAppThunkDispatch();
    const history = useHistory();

    const runBuild = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const inputs = document.getElementsByClassName("textfield__input");
        dispatch(addBuildToQueue(inputs["commitHash"].value))
            .then((buildId: string) => buildId && history.push(`/build/${buildId}`));
    }

    return (
        <div className="newbuild">
            <form className="newbuild__form" onSubmit={runBuild}>
                <h3 className="newbuild__form-title">New build</h3>
                <h4 className="newbuild__form-subtitle">Enter the commit hash which you want to build.</h4>
                <TextField name="commitHash" placeholder="Commit hash" />
                <div className="newbuild__form-buttons">
                    <div className="newbuild__form-buttons-button"><Button title="Run build" type="submit" /></div>
                    <Button title="Cancel" variant="secondary" onClick={props.onClose}/>
                </div>
            </form>
        </div>
    )
}

export default NewBuildPopup;
