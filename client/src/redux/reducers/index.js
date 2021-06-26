import {
    SET_SETTINGS
} from "../actions";

export const initialState = {
    settings: {}
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SETTINGS:
            return {
                ...state,
                settings: action.settings
            };
        default:
            return state;
    }
}

export default rootReducer;
