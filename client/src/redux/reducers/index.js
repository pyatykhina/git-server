import {
    SET_SETTINGS,
    SET_ALL_BUILDS,
    SET_BUILD
} from "../actions";

export const initialState = {
    settings: {},
    allBuilds: [],
    build: {}
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SETTINGS:
            return {
                ...state,
                settings: action.settings
            };
        case SET_ALL_BUILDS:
            return {
                ...state,
                allBuilds: action.allBuilds
            };
        case SET_BUILD:
            return {
                ...state,
                build: action.build
            };
        default:
            return state;
    }
}

export default rootReducer;
