export const SEARCH = 'SEARCH';
export const SET_LIST = 'SET_LIST';
 
export function search() {
    return {
        type: SEARCH
    };
}

export function setList(value) {
    return {
        type: SET_LIST,
        list: value
    };
}