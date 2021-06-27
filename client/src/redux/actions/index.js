export const SET_SETTINGS = "SET_SETTINGS";
export const SET_ALL_BUILDS = "SET_ALL_BUILDS";
export const SET_BUILD = "SET_BUILD";
export const SET_LOGS = "SET_LOGS";

export const setSettings = settings => ({
    type: SET_SETTINGS,
    settings
});

export const setAllBuilds = allBuilds => ({
    type: SET_ALL_BUILDS,
    allBuilds
});

export const setBuild = build => ({
    type: SET_BUILD,
    build
});

export const setLogs = logs => ({
    type: SET_LOGS,
    logs
});
