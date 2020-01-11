import {combineReducers} from 'redux';
import {gitUserReducer} from "../reducers/gitUsersReducer";

export default combineReducers({
    gitState: gitUserReducer,
});
