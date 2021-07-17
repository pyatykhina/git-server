export const SET_SETTINGS = "SET_SETTINGS";
export const SET_ALL_BUILDS = "SET_ALL_BUILDS";
export const SET_BUILD = "SET_BUILD";
export const SET_LOGS = "SET_LOGS";

export const setSettings = (settings: object) => ({
    type: SET_SETTINGS,
    settings
});

export const setAllBuilds = (allBuilds: Array<object>) => ({
    type: SET_ALL_BUILDS,
    allBuilds
});

export const setBuild = (build: object) => ({
    type: SET_BUILD,
    build
});

export const setLogs = (logs: string) => ({
    type: SET_LOGS,
    logs
});
