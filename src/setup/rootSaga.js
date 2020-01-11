import * as TYPES from '../constants/actionTypes';
import {fetchGitUsers} from "../actions/gitActions";
import {takeLatest} from "@redux-saga/core/effects";

export function* rootSaga() {
    yield takeLatest(TYPES.FETCH_GIT_USERS, fetchGitUsers);
}
