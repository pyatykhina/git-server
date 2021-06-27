import {
    SET_SETTINGS,
    SET_ALL_BUILDS
} from "../actions";

export const initialState = {
    settings: {},
    allBuilds: []
};

const rootReducer = (state = initialState, action) => {
    console.log('!!!!!', action)
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
        default:
            return state;
    }
}

export default rootReducer;
