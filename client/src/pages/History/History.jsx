import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./History.scss";

import IconButton from "../../components/IconButton";
import Build from "../../components/Build";
import NewBuildPopup from "../../components/NewBuildPopup";

function History() {
    const [newBuildPopup, setNewBuildPopup] = useState(false);

    const openNewBuildPopup = () => {
        setNewBuildPopup(true);
    }

    const closeNewBuildPopup = () => {
        setNewBuildPopup(false);
    }

    return (
        <>
            <header>
                <div className="logo">
                    philip1967/my-awesome-repo
                </div>
                <div className="header-buttons">
                    <div className="header-button"><IconButton icon="run" title="Run build" onClick={openNewBuildPopup} /></div>
                    <Link to="/settings"><IconButton icon="settings" /></Link>
                </div>
            </header>
            <Link to="/build/0"><Build /></Link>
            <Link to="/build/0"><Build /></Link>
            <Link to="/build/0"><Build /></Link>

            {newBuildPopup && <NewBuildPopup onClose={closeNewBuildPopup} />}
        </>
    )
}

export default History;
