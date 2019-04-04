import * as types from '../actions/ActionTypes.js';

const searchState = {
		searchList : false
};

export default function search(state = searchState, action) {

	switch (action.type) {
		case types.SEARCH :
			return { searchList : action.searchList };
		default :
			return state;
	}
}