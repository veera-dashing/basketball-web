import * as TYPES from '../constants/actionTypes';

export const gitUserReducer = (state = {
    users: []
}, action) => {
    switch (action.type) {
        case TYPES.FETCH_GIT_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload

            }
        case TYPES.FETCH_GIT_USERS_FAILURE:
            return {
                ...state,
                users: []
            }
    }
    return state;
}
