import { api } from "../api";
import {
    setSettings
} from "../actions";

const getSettings = () => dispatch => {
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

export {
    getSettings
}