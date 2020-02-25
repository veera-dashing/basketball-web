import { combineReducers } from 'redux';
import { gitUserReducer } from "../reducers/gitUsersReducer";
import { schoolReducer } from "../reducers/schoolsReducer";

export default combineReducers({
    gitState: gitUserReducer,
    schoolState: schoolReducer,
});
