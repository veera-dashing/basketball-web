import * as TYPES from '../constants/actionTypes';

export const gitUserReducer = (state = {
    users: []
}, action) => {
    switch (action.type) {
        //Step 7.1
        case TYPES.FETCH_GIT_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload

            }
        //Step 7.2
        case TYPES.FETCH_GIT_USERS_FAILURE:
            return {
                ...state,
                users: []
            }
    }
    return state;
}
