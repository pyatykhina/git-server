import { api } from "../api";
import {
    setSettings,
    setAllBuilds
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

export const getAllBuilds = () => dispatch => {
    return api
        .getAllBuilds()
        .then(data => {
            dispatch(setAllBuilds(data));
            return data;
        })
        .catch(error => {
            console.log(error)
        });
}
