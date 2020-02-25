import {call, put} from 'redux-saga/effects';

import {gitApi} from '../setup/configureAxios';
import * as TYPES from '../constants/actionTypes';
import * as URLS from '../constants/apiConstants';

/*
|--------------------------------------------------------------------------
| Fetch Git User Action Creator
|--------------------------------------------------------------------------
*/
// Step 3: Action creator
export const fetchGitUsersRequest = (onSuccess, onFailure) => ({
    type: TYPES.FETCH_GIT_USERS,
    onSuccess,
    onFailure
});

/**
 * Fetch Git User
 *
 * @param action action type
 */
// Step 4: Action which calls backend
export function* fetchGitUsers(action) {
    const {onSuccess, onFailure} = action;
    try {
        const response = yield call(gitApi.get, URLS.FETCH_GIT_USERS_URL);

        // Step 4.1: Puts data in Redux store
        yield put({
            type: TYPES.FETCH_GIT_USERS_SUCCESS,
            payload: response.data
        });
        // Step 4.2: Success scenario
        onSuccess(response);
    } catch (error) {
        yield put({
            type: TYPES.FETCH_GIT_USERS_ERROR,
            error
        });
        //Step 4.3: Error Scenario
        onFailure(error);
    }
}


export const fetchGitUserDetailsRequest = (id, onSuccess, onFailure) => ({
    type: TYPES.FETCH_GIT_USER_DETAILS,
    id,
    onSuccess,
    onFailure
});

/**
 * Fetch Git User
 *
 * @param action action type
 */
// Step 4: Action which calls backend
export function* fetchGitUserDetails(action) {
    const {id, onSuccess, onFailure} = action;
    try {
        const response = yield call(gitApi.get, URLS.FETCH_GIT_USER_DETAILS_URL+ id);
        // Step 4.2: Success scenario
        onSuccess(response);
    } catch (error) {
        //Step 4.3: Error Scenario
        onFailure(error);
    }
}
