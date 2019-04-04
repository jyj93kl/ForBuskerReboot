import * as types from './ActionTypes.js';

export function search(searchList) {
    return {
        type: types.SEARCH,
        searchList
    };
}
