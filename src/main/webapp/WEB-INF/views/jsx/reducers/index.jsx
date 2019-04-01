import { SEARCH, SET_LIST } from '../actions';
import { combineReducers } from 'redux';
 
const searchInitialState = {
    value : 0,
    list : 1
};


const search = (state = searchInitialState, action) => {
    switch(action.type) {
        case SEARCH:
            return Object.assign({}, state, {
                value: state.value
            });
        case SET_LIST:
            return Object.assign({}, state, {
                list: action.list
            });
        default:
            return state;
    }
}

 
const searchComponent = combineReducers({
    search
});
 
export default searchComponent;