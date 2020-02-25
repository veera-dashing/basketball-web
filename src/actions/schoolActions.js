import { normalize } from 'normalizr';
import { call, put, select } from 'redux-saga/effects';

import * as SCHEMAS from 'constants/schemas';
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
        const meta = computePaginationMeta(
            response.data.totalCount,
            `/schools`
        );

        yield put({
            type: TYPES.FETCH_SCHOOLS_SUCCESS,
            payload: response.data,
            meta
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
        const response = yield call(coreApi.post, URLS.ADD_SCHOOL_URL, values);
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
            coreApi.put,
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
    const { schoolID, values, onSuccess, onFailure } = action;

    try {
        const response = yield call(
            coreApi.put,
            URLS.DELETE_SCHOOL_URL.replace(':schoolID', schoolID),
            values
        );
        onSuccess(response.data);
    } catch (error) {
        onFailure(error);
    }
}

/*
|--------------------------------------------------------------------------
| Fetch Users
|--------------------------------------------------------------------------
*/
export const fetchUsersRequest = (params, onSuccess, onFailure) => ({
    type: TYPES.FETCH_USERS_REQUEST,
    params,
    onSuccess,
    onFailure
});

/**
 * fetch Users
 *
 * @param action action type
 */
export function* fetchUsers(action) {
    const { params, onSuccess, onFailure } = action;

    try {
        const url = computePaginationURL(URLS.FETCH_USERS_URL, params);
        const response = yield call(coreApi.get, url);

        const meta = computePaginationMeta(
            response.data.totalCount,
            `/users`
        );
        const { entities, result } = normalize(response.data.data, [
            SCHEMAS.user
        ]);

        yield put({
            type: TYPES.FETCH_USERS_SUCCESS,
            entities,
            result,
            meta
        });
    } catch (error) {
        yield put({
            type: TYPES.FETCH_USERS_ERROR,
            error
        });
    }
}

/*
|--------------------------------------------------------------------------
| Fetch User
|--------------------------------------------------------------------------
*/
export const fetchUserRequest = (userID, onSuccess, onFailure) => ({
    type: TYPES.FETCH_USER_REQUEST,
    userID,
    onSuccess,
    onFailure
});

/**
 * get User
 *
 * @param action action type
 */
export function* fetchUser(action) {
    const { userID, onSuccess, onFailure } = action;
    try {
        const response = yield call(
            coreApi.get,
            URLS.FETCH_USER_URL.replace(':userID', userID)
        );
        onSuccess(response.data);
    } catch (error) {
        onFailure(error);
    }
}

/*
|--------------------------------------------------------------------------
| Add User
|--------------------------------------------------------------------------
*/
export const addUserRequest = (values, onSuccess, onFailure) => ({
    type: TYPES.ADD_USER_REQUEST,
    values,
    onSuccess,
    onFailure
});

/**
 * add User
 *
 * @param action action type
 */
export function* addUser(action) {
    const { values, onSuccess, onFailure } = action;

    try {
        const response = yield call(coreApi.post, URLS.ADD_USER_URL, values);
        onSuccess(response.data);
    } catch (error) {
        onFailure(error);
    }
}

/*
|--------------------------------------------------------------------------
| Update User
|--------------------------------------------------------------------------
*/
export const updateUserRequest = (
    userID,
    values,
    onSuccess,
    onFailure
) => ({
    type: TYPES.UPDATE_USER_REQUEST,
    userID,
    values,
    onSuccess,
    onFailure
});

/**
 * update User
 *
 * @param action action type
 */
export function* updateUser(action) {
    const { userID, values, onSuccess, onFailure } = action;

    try {
        const response = yield call(
            coreApi.put,
            URLS.UPDATE_USER_URL.replace(':userID', userID),
            values
        );
        onSuccess(response.data);
    } catch (error) {
        onFailure(error);
    }
}

/*
|--------------------------------------------------------------------------
| Delete User
|--------------------------------------------------------------------------
*/
export const deleteUserRequest = (
    userID,
    onSuccess,
    onFailure
) => ({
    type: TYPES.DELETE_USER_REQUEST,
    userID,
    onSuccess,
    onFailure
});

/**
 * delete User
 *
 * @param action action type
 */
export function* deleteUser(action) {
    const { userID, values, onSuccess, onFailure } = action;

    try {
        const response = yield call(
            coreApi.put,
            URLS.DELETE_USER_URL.replace(':userID', userID),
            values
        );
        onSuccess(response.data);
    } catch (error) {
        onFailure(error);
    }
}