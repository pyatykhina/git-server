import rootReducer, {initialState} from "./index";

import {
    SET_SETTINGS,
    SET_ALL_BUILDS,
    SET_BUILD,
    SET_LOGS
} from "../actions";

describe("Frontend reducers", () => {

    test("Set settings", () => {
        const action = {
            type: SET_SETTINGS,
            settings: [1, 2, 3]
        }
        expect(rootReducer(initialState, action))
            .toEqual({
                ...initialState,
                settings: [1, 2, 3]
            })
    })

    test("Set all builds", () => {
        const action = {
            type: SET_ALL_BUILDS,
            allBuilds: [1, 2, 3]
        }
        expect(rootReducer(initialState, action))
            .toEqual({
                ...initialState,
                allBuilds: [1, 2, 3]
            })
    })

    test("Set build", () => {
        const action = {
            type: SET_BUILD,
            build: [1, 2, 3]
        }
        expect(rootReducer(initialState, action))
            .toEqual({
                ...initialState,
                build: [1, 2, 3]
            })
    })

    test("Set logs", () => {
        const action = {
            type: SET_LOGS,
            logs: [1, 2, 3]
        }
        expect(rootReducer(initialState, action))
            .toEqual({
                ...initialState,
                logs: [1, 2, 3]
            })
    })

})
