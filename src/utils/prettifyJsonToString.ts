export function prettifyJsonToString(json: object) {
    return JSON.stringify(json, null, '\t')
};
 