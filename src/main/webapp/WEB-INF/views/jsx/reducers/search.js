import * as types from '../actions/ActionTypes.js';

const searchState = {
		searchList : false,
		whatList : 'list'
};

export default function search(state = searchState, action) {
	switch (action.type) {
		case types.SEARCH :
			return { 
				searchList : action.searchList,
				whatList : action.whatList
			};
		default :
			return state;
	}
}