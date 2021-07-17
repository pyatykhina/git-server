import { api } from "../api";
import {
    setSettings,
    setAllBuilds,
    setBuild,
    setLogs
} from "../actions";
import { Dispatch } from 'redux';

export const getSettings = () => (dispatch: Dispatch) => {
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

export const editSettings = (config: object) => (dispatch: Dispatch) => {
    return api
        .editSettings(config)
        .then(data => {
            data.status !== 500 && dispatch(getSettings() as any);
            return data;
        })
        .catch(error => {
            console.log(error)
        });
}

export const getAllBuilds = (offset = 0, limit = 25) => (dispatch: Dispatch) => {
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

export const getBuild = (buildId: string) => (dispatch: Dispatch) => {
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

export const addBuildToQueue = (commitHash: string) => (dispatch: Dispatch) => {
    return api
        .addBuildToQueue(commitHash)
        .then(data => {
            dispatch(getAllBuilds() as any);
            return data;
        })
        .catch(error => {
            console.log(error)
        });
}

export const getLogs = (buildId: string) => (dispatch: Dispatch) => {
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
