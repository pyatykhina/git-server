export const SET_SETTINGS = "SET_SETTINGS";
export const SET_ALL_BUILDS = "SET_ALL_BUILDS";

export const setSettings = settings => ({
    type: SET_SETTINGS,
    settings
});

export const setAllBuilds = allBuilds => ({
    type: SET_ALL_BUILDS,
    allBuilds
});
