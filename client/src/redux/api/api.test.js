import {
    getSettings,
    editSettings,
    getAllBuilds,
    addBuildToQueue,
    getBuild,
    getLogs
} from "./index";

jest.mock("./index", () => ({
    getSettings: jest.fn(() => true),
    editSettings: jest.fn(() => true),
    getAllBuilds: jest.fn(() => true),
    addBuildToQueue: jest.fn(() => true),
    getBuild: jest.fn(() => true),
    getLogs: jest.fn(() => true)
}))

describe("Frontend api", () => {

    afterEach(jest.clearAllMocks);

    test("getSettings", () => {
        getSettings();
        expect(getSettings).toHaveBeenCalledTimes(1);
    })

    test("editSettings", () => {
        const config = {
            repoName: "repoName",
            buildCommand: "buildCommand",
            mainBranch: "mainBranch",
            period: 10
        }
        editSettings(config);
        expect(editSettings).toHaveBeenCalledTimes(1);
        expect(editSettings).toBeCalledWith(config);
    })

    test("getAllBuilds", () => {
        getAllBuilds(0, 1);
        expect(getAllBuilds).toHaveBeenCalledTimes(1);
        expect(getAllBuilds).toBeCalledWith(0, 1);
    })

    test("addBuildToQueue", () => {
        addBuildToQueue("commitHash");
        expect(addBuildToQueue).toHaveBeenCalledTimes(1);
        expect(addBuildToQueue).toBeCalledWith("commitHash");
    })

    test("getBuild", () => {
        getBuild(1);
        expect(getBuild).toHaveBeenCalledTimes(1);
        expect(getBuild).toBeCalledWith(1);
    })

    test("getLogs", () => {
        getLogs(1);
        expect(getLogs).toHaveBeenCalledTimes(1);
        expect(getLogs).toBeCalledWith(1);
    })

})
