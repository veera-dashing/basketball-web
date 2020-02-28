import * as TYPES from '../constants/actionTypes';

export const schoolReducer = (state = {
    schools: []
}, action) => {
    switch (action.type) {
        //Step 7.1
        case TYPES.FETCH_SCHOOLS_SUCCESS:
            return {
                ...state,
                schools: action.payload

            }
        //Step 7.2
        case TYPES.FETCH_SCHOOLS_ERROR:
            return {
                ...state,
                schools: []
            }
    }
    return state;
}
