import * as TYPES from '../constants/actionTypes';

export const tournamentReducer = (state = {
    tournaments: [],
}, action) => {
    switch (action.type) {
        case TYPES.FETCH_TOURNAMENTS_SUCCESS:
            return {
                ...state,
                tournaments: action.payload

            }
        case TYPES.FETCH_TOURNAMENTS_ERROR:
            return {
                ...state,
                tournaments: []
            }
    }
    return state;
}
