import {
    SET_SETTINGS,
    SET_ALL_BUILDS,
    SET_BUILD,
    SET_LOGS
} from "../actions";

export const initialState = {
    settings: {},
    allBuilds: [],
    build: {},
    logs: ""
};

const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_SETTINGS:
            return {
                ...state,
                settings: action.settings
            };
        case SET_ALL_BUILDS:
            return {
                ...state,
                allBuilds: state.allBuilds.concat(action.allBuilds)
            };
        case SET_BUILD:
            return {
                ...state,
                build: action.build
            };
        case SET_LOGS:
            return {
                ...state,
                logs: action.logs
            };
        default:
            return state;
    }
}

export default rootReducer;
