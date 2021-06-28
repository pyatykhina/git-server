import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Details.scss";
import { useDispatch, useSelector } from "react-redux";
import { getBuild, getLogs, addBuildToQueue } from "../../redux/middlewares";

import IconButton from "../../components/IconButton";
import Build from "../../components/Build";

function Details(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getBuild(props.match.params.id));
        dispatch(getLogs(props.match.params.id));
    }, [props.match.params.id])

    const repoName = useSelector(state => state.settings.repoName);
    const build = useSelector(state => state.build);

    const rebuildCommit = () => {
        dispatch(addBuildToQueue(build.commitHash))
            .then(buildId => history.push(`/build/${buildId}`));
    }

    return (
        <>
            <header>
                <div className="logo">
                    {repoName?.split("/")[3]}/{repoName?.split("/")[4].split(".")[0]}
                </div>
                <div className="header-buttons">
                    <div className="header-button"><IconButton icon="rebuild" title="Rebuild" onClick={rebuildCommit} /></div>
                    <Link to="/settings"><IconButton icon="settings" /></Link>
                </div>
            </header>
            {build && <>
                <Link to="/">
                    <Build 
                        variant="opened"
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
                <iframe className="logs" title="logs"></iframe>
            </>}
        </>
    )
}

export default Details;
