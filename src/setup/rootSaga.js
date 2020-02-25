import * as TYPES from '../constants/actionTypes';
import {
    fetchGitUsers,
    fetchGitUserDetails,
} from "../actions/gitActions";
import {
    fetchSchools,
    fetchSchool,
    addSchool,
    updateSchool,
    deleteSchool,
} from "../actions/schoolActions";

import { takeLatest } from "@redux-saga/core/effects";

export function* rootSaga() {
    // Step 5: Saga call to listen for action
    //If someone dispatched FETCH_GIT_USERS action then execute fetchGitUsers() function
    yield takeLatest(TYPES.FETCH_GIT_USERS, fetchGitUsers);
    yield takeLatest(TYPES.FETCH_GIT_USER_DETAILS, fetchGitUserDetails);

    yield takeLatest(TYPES.FETCH_SCHOOLS_REQUEST, fetchSchools);
    yield takeLatest(TYPES.FETCH_SCHOOL_REQUEST, fetchSchool);
    yield takeLatest(TYPES.ADD_SCHOOL_REQUEST, addSchool);
    yield takeLatest(TYPES.UPDATE_SCHOOL_REQUEST, updateSchool);
    yield takeLatest(TYPES.DELETE_SCHOOL_REQUEST, deleteSchool);
}
