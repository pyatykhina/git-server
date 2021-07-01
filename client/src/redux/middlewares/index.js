import { api } from "../api";
import {
    setSettings,
    setAllBuilds,
    setBuild,
    setLogs
} from "../actions";

export const getSettings = () => dispatch => {
    return api
        .getSettings()
        .then(data => {
            dispatch(setSettings(data));
            return data;
        })
        .catch(error => {
            console.log(error)
        });
}

export const editSettings = config => dispatch => {
    return api
        .editSettings(config)
        .then(data => {
            data.status !== 500 && dispatch(getSettings());
            return data;
        })
        .catch(error => {
            console.log(error)
        });
}

export const getAllBuilds = (offset = 0, limit = 25) => dispatch => {
    return api
        .getAllBuilds(offset, limit)
        .then(data => {
            dispatch(setAllBuilds(data));
            return data;
        })
        .catch(error => {
            console.log(error)
        });
}

export const getBuild = buildId => dispatch => {
    return api
        .getBuild(buildId)
        .then(data => {
            dispatch(setBuild(data));
            return data;
        })
        .catch(error => {
            console.log(error)
        });
}

export const addBuildToQueue = commitHash => dispatch => {
    return api
        .addBuildToQueue(commitHash)
        .then(data => {
            dispatch(getAllBuilds());
            return data;
        })
        .catch(error => {
            console.log(error)
        });
}

export const getLogs = buildId => dispatch => {
    return api
        .getLogs(buildId)
        .then(data => {
            dispatch(setLogs(data));
            return data;
        })
        .catch(error => {
            console.log(error)
        });
}
