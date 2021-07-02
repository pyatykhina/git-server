import {
    SET_SETTINGS,
    SET_ALL_BUILDS,
    SET_BUILD,
    SET_LOGS,

    setSettings,
    setAllBuilds,
    setBuild,
    setLogs
} from "./index";

describe("Frontend action", () => {

    let testData;

    beforeEach(() => {
        testData = [1, 2, 3];
    })

    test("setSettings", () => {
        const expectData = {
            type: SET_SETTINGS,
            settings: testData
        };
        expect(setSettings(testData)).toEqual(expectData);
    });

    test("setAllBuilds", () => {
        const expectData = {
            type: SET_ALL_BUILDS,
            allBuilds: testData
        };
        expect(setAllBuilds(testData)).toEqual(expectData);
    });

    test("setBuild", () => {
        const expectData = {
            type: SET_BUILD,
            build: testData
        };
        expect(setBuild(testData)).toEqual(expectData);
    });

    test("setLogs", () => {
        const expectData = {
            type: SET_LOGS,
            logs: testData
        };
        expect(setLogs(testData)).toEqual(expectData);
    });

})
