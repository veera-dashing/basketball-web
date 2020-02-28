import { combineReducers } from 'redux';

import { gitUserReducer } from '../reducers/gitUsersReducer';
import { schoolReducer } from '../reducers/schoolReducer';

export default combineReducers({
    gitState: gitUserReducer,
    schoolState: schoolReducer,
});
