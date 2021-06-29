import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./History.scss";
import { getAllBuilds } from "../../redux/middlewares";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../components/Button";
import IconButton from "../../components/IconButton";
import Build from "../../components/Build";
import NewBuildPopup from "../../components/NewBuildPopup";

function History() {
    const [newBuildPopup, setNewBuildPopup] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllBuilds());
    }, [])

    const openNewBuildPopup = () => {
        setNewBuildPopup(true);
    }

    const closeNewBuildPopup = () => {
        setNewBuildPopup(false);
    }

    const repoName = useSelector(state => state.settings.repoName);
    const allBuilds = useSelector(state => state.allBuilds);

    const loadMoreBuilds = () => {
        dispatch(getAllBuilds(allBuilds.length - 1, 25));
    }

    return (
        <>
            <header>
                <div className="logo">
                    {repoName?.split("/")[3]}/{repoName?.split("/")[4].split(".")[0]}
                </div>
                <div className="header-buttons">
                    <div className="header-button"><IconButton icon="run" title="Run build" onClick={openNewBuildPopup} /></div>
                    <Link to="/settings"><IconButton icon="settings" /></Link>
                </div>
            </header>
            {allBuilds?.map(build => (
                <Link to={`/build/${build.id}`} key={build.buildNumber}>
                    <Build 
                        buildNumber={build.buildNumber}
                        commitMessage={build.commitMessage}
                        branchName={build.branchName}
                        commitHash={build.commitHash}
                        authorName={build.authorName}
                        status={build.status}
                        start={build.start}
                        duration={build.duration}
                    />
                </Link>
            ))}
            {allBuilds.length > 0 && <Button title="Show more" variant="secondary" onClick={loadMoreBuilds} style={{marginBottom: 16}} />}

            {newBuildPopup && <NewBuildPopup onClose={closeNewBuildPopup} />}
        </>
    )
}

export default History;
