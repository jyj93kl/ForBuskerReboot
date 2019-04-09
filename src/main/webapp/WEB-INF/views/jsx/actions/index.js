import * as types from './ActionTypes.js';

export function search(searchList, whatList) {
    return {
        type: types.SEARCH,
        searchList: searchList,
        whatList: whatList
    };
}