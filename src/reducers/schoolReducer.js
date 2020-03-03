import * as TYPES from '../constants/actionTypes';

export const schoolReducer = (state = {
    schools: [],
}, action) => {
    switch (action.type) {
        case TYPES.FETCH_SCHOOLS_SUCCESS:
            return {
                ...state,
                schools: action.payload

            }
        case TYPES.FETCH_SCHOOLS_ERROR:
            return {
                ...state,
                schools: []
            }
    }
    return state;
}
