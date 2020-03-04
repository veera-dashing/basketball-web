import { combineReducers } from 'redux';

import { gitUserReducer } from '../reducers/gitUsersReducer';
import { schoolReducer } from '../reducers/schoolReducer';
import { tournamentReducer } from '../reducers/tournamentReducer';

export default combineReducers({
    gitState: gitUserReducer,
    schoolState: schoolReducer,
    tournamentState: tournamentReducer,
});
