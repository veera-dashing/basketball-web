import { normalize } from 'normalizr';
import { call, put, select } from 'redux-saga/effects';

import * as TYPES from 'constants/actionTypes';
import * as URLS from 'constants/apiConstants';
import { coreApi } from 'setup/configureAxios';
import { computePaginationURL, computePaginationMeta } from 'utilities/helpers';

/*
|--------------------------------------------------------------------------
| Fetch Schools
|--------------------------------------------------------------------------
*/
export const fetchSchoolsRequest = (params, onSuccess, onFailure) => ({
    type: TYPES.FETCH_SCHOOLS_REQUEST,
    params,
    onSuccess,
    onFailure
});

/**
 * fetch Schools
 *
 * @param action action type
 */
export function* fetchSchools(action) {
    const { params, onSuccess, onFailure } = action;
    try {
        const url = computePaginationURL(URLS.FETCH_SCHOOLS_URL, params);
        const response = yield call(coreApi.get, url);
        yield put({
            type: TYPES.FETCH_SCHOOLS_SUCCESS,
            payload: response.data.data
        });
        onSuccess(response);
    } catch (error) {
        yield put({
            type: TYPES.FETCH_SCHOOLS_ERROR,
            error
        });
        onFailure(error);
    }
}

/*
|--------------------------------------------------------------------------
| Fetch School
|--------------------------------------------------------------------------
*/
export const fetchSchoolRequest = (schoolID, onSuccess, onFailure) => ({
    type: TYPES.FETCH_SCHOOL_REQUEST,
    schoolID,
    onSuccess,
    onFailure
});

/**
 * get School
 *
 * @param action action type
 */
export function* fetchSchool(action) {
    const { schoolID, onSuccess, onFailure } = action;
    try {
        const response = yield call(
            coreApi.get,
            URLS.FETCH_SCHOOL_URL.replace(':schoolID', schoolID)
        );
        onSuccess(response.data);
    } catch (error) {
        onFailure(error);
    }
}

/*
|--------------------------------------------------------------------------
| Add School
|--------------------------------------------------------------------------
*/
export const addSchoolRequest = (values, onSuccess, onFailure) => ({
    type: TYPES.ADD_SCHOOL_REQUEST,
    values,
    onSuccess,
    onFailure
});

/**
 * add School
 *
 * @param action action type
 */
export function* addSchool(action) {
    const { values, onSuccess, onFailure } = action;
    try {
        const response = yield call(
            coreApi.post,
            URLS.ADD_SCHOOL_URL,
            values);
        onSuccess(response.data);
    } catch (error) {
        onFailure(error);
    }
}

/*
|--------------------------------------------------------------------------
| Update School
|--------------------------------------------------------------------------
*/
export const updateSchoolRequest = (
    schoolID,
    values,
    onSuccess,
    onFailure
) => ({
    type: TYPES.UPDATE_SCHOOL_REQUEST,
    schoolID,
    values,
    onSuccess,
    onFailure
});

/**
 * update School
 *
 * @param action action type
 */
export function* updateSchool(action) {
    const { schoolID, values, onSuccess, onFailure } = action;
    try {
        const response = yield call(
            coreApi.post,
            URLS.UPDATE_SCHOOL_URL.replace(':schoolID', schoolID),
            values
        );
        onSuccess(response.data);
    } catch (error) {
        onFailure(error);
    }
}

/*
|--------------------------------------------------------------------------
| Delete School
|--------------------------------------------------------------------------
*/
export const deleteSchoolRequest = (
    schoolID,
    onSuccess,
    onFailure
) => ({
    type: TYPES.DELETE_SCHOOL_REQUEST,
    schoolID,
    onSuccess,
    onFailure
});

/**
 * delete School
 *
 * @param action action type
 */
export function* deleteSchool(action) {
    const { schoolID, onSuccess, onFailure } = action;
    try {
        const response = yield call(
            coreApi.delete,
            URLS.DELETE_SCHOOL_URL.replace(':schoolID', schoolID),
        );
        onSuccess(response.data);
    } catch (error) {
        onFailure(error);
    }
}

/*
|--------------------------------------------------------------------------
| Fetch School Users
|--------------------------------------------------------------------------
*/
export const fetchSchoolUsersRequest = (schoolID, params, onSuccess, onFailure) => ({
    type: TYPES.FETCH_SCHOOL_USERS_REQUEST,
    schoolID,
    params,
    onSuccess,
    onFailure
});

/**
 * fetch School Users
 *
 * @param action action type
 */
export function* fetchSchoolUsers(action) {
    const { schoolID, params, onSuccess, onFailure } = action;
    try {
        const url = computePaginationURL(
            URLS.FETCH_SCHOOL_USERS_URL.replace(':schoolID', schoolID),
            params);
        const response = yield call(coreApi.get, url);
        onSuccess(response.data);
    } catch (error) {
        onFailure(error);
    }
}

/*
|--------------------------------------------------------------------------
| Fetch School User
|--------------------------------------------------------------------------
*/
export const fetchSchoolUserRequest = (schoolID, userID, onSuccess, onFailure) => ({
    type: TYPES.FETCH_SCHOOL_USER_REQUEST,
    schoolID,
    userID,
    onSuccess,
    onFailure
});

/**
 * get User
 *
 * @param action action type
 */
export function* fetchSchoolUser(action) {
    const { schoolID, userID, onSuccess, onFailure } = action;
    try {
        const response = yield call(
            coreApi.get,
            URLS.FETCH_SCHOOL_USER_URL.replace(':schoolID', schoolID).replace(':userID', userID)
        );
        onSuccess(response.data);
    } catch (error) {
        onFailure(error);
    }
}

/*
|--------------------------------------------------------------------------
| Add School User
|--------------------------------------------------------------------------
*/
export const addSchoolUserRequest = (schoolID, values, onSuccess, onFailure) => ({
    type: TYPES.ADD_SCHOOL_USER_REQUEST,
    schoolID,
    values,
    onSuccess,
    onFailure
});

/**
 * add School User
 *
 * @param action action type
 */
export function* addSchoolUser(action) {
    const { schoolID, values, onSuccess, onFailure } = action;
    try {
        const response = yield call(
            coreApi.post,
            URLS.ADD_SCHOOL_USER_URL.replace(':schoolID', schoolID),
            values);
        onSuccess(response.data);
    } catch (error) {
        onFailure(error);
    }
}

/*
|--------------------------------------------------------------------------
| Update School User
|--------------------------------------------------------------------------
*/
export const updateSchoolUserRequest = (
    schoolID,
    userID,
    values,
    onSuccess,
    onFailure
) => ({
    type: TYPES.UPDATE_SCHOOL_USER_REQUEST,
    schoolID,
    userID,
    values,
    onSuccess,
    onFailure
});

/**
 * update School User
 *
 * @param action action type
 */
export function* updateSchoolUser(action) {
    const { schoolID, userID, values, onSuccess, onFailure } = action;
    try {
        const response = yield call(
            coreApi.put,
            URLS.UPDATE_SCHOOL_USER_URL.replace(':schoolID', schoolID).replace(':userID', userID),
            values
        );
        onSuccess(response.data);
    } catch (error) {
        onFailure(error);
    }
}

/*
|--------------------------------------------------------------------------
| Delete School User
|--------------------------------------------------------------------------
*/
export const deleteSchoolUserRequest = (
    schoolID,
    userID,
    onSuccess,
    onFailure
) => ({
    type: TYPES.DELETE_SCHOOL_USER_REQUEST,
    schoolID,
    userID,
    onSuccess,
    onFailure
});

/**
 * delete School User
 *
 * @param action action type
 */
export function* deleteSchoolUser(action) {
    const { schoolID, userID, onSuccess, onFailure } = action;
    try {
        const response = yield call(
            coreApi.delete,
            URLS.DELETE_SCHOOL_USER_URL.replace(':schoolID', schoolID).replace(':userID', userID),
        );
        onSuccess(response.data);
    } catch (error) {
        onFailure(error);
    }
}