import {call, put} from 'redux-saga/effects';

import {gitApi} from '../setup/configureAxios';
import * as TYPES from '../constants/actionTypes';
import * as URLS from '../constants/apiConstants';

/*
|--------------------------------------------------------------------------
| Fetch Git User Action Creator
|--------------------------------------------------------------------------
*/

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
export function* fetchGitUsers(action) {
    const {onSuccess, onFailure} = action;
    try {
        const response = yield call(gitApi.get, URLS.FETCH_GIT_USERS_URL);

        yield put({
            type: TYPES.FETCH_GIT_USERS_SUCCESS,
            payload: response.data
        });
        onSuccess(response);
    } catch (error) {
        yield put({
            type: TYPES.FETCH_GIT_USERS_FAILURE,
            error
        });
        onFailure(error);
    }
}
