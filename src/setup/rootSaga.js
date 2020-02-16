import * as TYPES from '../constants/actionTypes';
import {fetchGitUserDetails, fetchGitUsers} from "../actions/gitActions";
import {takeLatest} from "@redux-saga/core/effects";

export function* rootSaga() {
    // Step 5: Saga call to listen for action
    //If someone dispatched FETCH_GIT_USERS action then execute fetchGitUsers() function
    yield takeLatest(TYPES.FETCH_GIT_USERS, fetchGitUsers);
    yield takeLatest(TYPES.FETCH_GIT_USER_DETAILS, fetchGitUserDetails);
}
