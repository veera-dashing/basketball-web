import { normalize } from 'normalizr';
import { call, put, select } from 'redux-saga/effects';

import * as TYPES from 'constants/actionTypes';
import * as URLS from 'constants/apiConstants';
import { coreApi } from 'setup/configureAxios';
import { computePaginationURL, computePaginationMeta } from 'utilities/helpers';

/*
|--------------------------------------------------------------------------
| Fetch Tournaments
|--------------------------------------------------------------------------
*/
export const fetchTournamentsRequest = (params, onSuccess, onFailure) => ({
    type: TYPES.FETCH_TOURNAMENTS_REQUEST,
    params,
    onSuccess,
    onFailure
});

/**
 * fetch Tournaments
 *
 * @param action action type
 */
export function* fetchTournaments(action) {
    const { params, onSuccess, onFailure } = action;
    try {
        const url = computePaginationURL(URLS.FETCH_TOURNAMENTS_URL, params);
        const response = yield call(coreApi.get, url);
        yield put({
            type: TYPES.FETCH_TOURNAMENTS_SUCCESS,
            payload: response.data.data
        });
        onSuccess(response);
    } catch (error) {
        yield put({
            type: TYPES.FETCH_TOURNAMENTS_ERROR,
            error
        });
        onFailure(error);
    }
}

/*
|--------------------------------------------------------------------------
| Fetch Tournament
|--------------------------------------------------------------------------
*/
export const fetchTournamentRequest = (tournamentID, onSuccess, onFailure) => ({
    type: TYPES.FETCH_TOURNAMENT_REQUEST,
    tournamentID,
    onSuccess,
    onFailure
});

/**
 * get Tournament
 *
 * @param action action type
 */
export function* fetchTournament(action) {
    const { tournamentID, onSuccess, onFailure } = action;
    try {
        const response = yield call(
            coreApi.get,
            URLS.FETCH_TOURNAMENT_URL.replace(':tournamentID', tournamentID)
        );
        onSuccess(response.data);
    } catch (error) {
        onFailure(error);
    }
}

/*
|--------------------------------------------------------------------------
| Add Tournament
|--------------------------------------------------------------------------
*/
export const addTournamentRequest = (values, onSuccess, onFailure) => ({
    type: TYPES.ADD_TOURNAMENT_REQUEST,
    values,
    onSuccess,
    onFailure
});

/**
 * add Tournament
 *
 * @param action action type
 */
export function* addTournament(action) {
    const { values, onSuccess, onFailure } = action;
    try {
        const response = yield call(
            coreApi.post,
            URLS.ADD_TOURNAMENT_URL,
            values);
        onSuccess(response.data);
    } catch (error) {
        onFailure(error);
    }
}

/*
|--------------------------------------------------------------------------
| Update Tournament
|--------------------------------------------------------------------------
*/
export const updateTournamentRequest = (
    tournamentID,
    values,
    onSuccess,
    onFailure
) => ({
    type: TYPES.UPDATE_TOURNAMENT_REQUEST,
    tournamentID,
    values,
    onSuccess,
    onFailure
});

/**
 * update Tournament
 *
 * @param action action type
 */
export function* updateTournament(action) {
    const { tournamentID, values, onSuccess, onFailure } = action;
    try {
        const response = yield call(
            coreApi.post,
            URLS.UPDATE_TOURNAMENT_URL.replace(':tournamentID', tournamentID),
            values
        );
        onSuccess(response.data);
    } catch (error) {
        onFailure(error);
    }
}

/*
|--------------------------------------------------------------------------
| Delete Tournament
|--------------------------------------------------------------------------
*/
export const deleteTournamentRequest = (
    tournamentID,
    onSuccess,
    onFailure
) => ({
    type: TYPES.DELETE_TOURNAMENT_REQUEST,
    tournamentID,
    onSuccess,
    onFailure
});

/**
 * delete Tournament
 *
 * @param action action type
 */
export function* deleteTournament(action) {
    const { tournamentID, onSuccess, onFailure } = action;
    try {
        const response = yield call(
            coreApi.delete,
            URLS.DELETE_TOURNAMENT_URL.replace(':tournamentID', tournamentID),
        );
        onSuccess(response.data);
    } catch (error) {
        onFailure(error);
    }
}

/*
|--------------------------------------------------------------------------
| Fetch Tournament Matches
|--------------------------------------------------------------------------
*/
export const fetchTournamentMatchesRequest = (tournamentID, params, onSuccess, onFailure) => ({
    type: TYPES.FETCH_TOURNAMENT_MATCHES_REQUEST,
    tournamentID,
    params,
    onSuccess,
    onFailure
});

/**
 * fetch Tournament Matches
 *
 * @param action action type
 */
export function* fetchTournamentMatches(action) {
    const { tournamentID, params, onSuccess, onFailure } = action;
    try {
        const url = computePaginationURL(
            URLS.FETCH_TOURNAMENT_MATCHES_URL.replace(':tournamentID', tournamentID),
            params);
        const response = yield call(coreApi.get, url);
        onSuccess(response.data);
    } catch (error) {
        onFailure(error);
    }
}

/*
|--------------------------------------------------------------------------
| Fetch Tournament Match
|--------------------------------------------------------------------------
*/
export const fetchTournamentMatchRequest = (tournamentID, matchID, onSuccess, onFailure) => ({
    type: TYPES.FETCH_TOURNAMENT_MATCH_REQUEST,
    tournamentID,
    matchID,
    onSuccess,
    onFailure
});

/**
 * get Match
 *
 * @param action action type
 */
export function* fetchTournamentMatch(action) {
    const { tournamentID, matchID, onSuccess, onFailure } = action;
    try {
        const response = yield call(
            coreApi.get,
            URLS.FETCH_TOURNAMENT_MATCH_URL.replace(':tournamentID', tournamentID).replace(':matchID', matchID)
        );
        onSuccess(response.data);
    } catch (error) {
        onFailure(error);
    }
}

/*
|--------------------------------------------------------------------------
| Add Tournament Match
|--------------------------------------------------------------------------
*/
export const addTournamentMatchRequest = (tournamentID, values, onSuccess, onFailure) => ({
    type: TYPES.ADD_TOURNAMENT_MATCH_REQUEST,
    tournamentID,
    values,
    onSuccess,
    onFailure
});

/**
 * add Tournament Match
 *
 * @param action action type
 */
export function* addTournamentMatch(action) {
    const { tournamentID, values, onSuccess, onFailure } = action;
    try {
        const response = yield call(
            coreApi.post,
            URLS.ADD_TOURNAMENT_MATCH_URL.replace(':tournamentID', tournamentID),
            values);
        onSuccess(response.data);
    } catch (error) {
        onFailure(error);
    }
}

/*
|--------------------------------------------------------------------------
| Update Tournament Match
|--------------------------------------------------------------------------
*/
export const updateTournamentMatchRequest = (
    tournamentID,
    matchID,
    values,
    onSuccess,
    onFailure
) => ({
    type: TYPES.UPDATE_TOURNAMENT_MATCH_REQUEST,
    tournamentID,
    matchID,
    values,
    onSuccess,
    onFailure
});

/**
 * update Tournament Match
 *
 * @param action action type
 */
export function* updateTournamentMatch(action) {
    const { tournamentID, matchID, values, onSuccess, onFailure } = action;
    try {
        const response = yield call(
            coreApi.put,
            URLS.UPDATE_TOURNAMENT_MATCH_URL.replace(':tournamentID', tournamentID).replace(':matchID', matchID),
            values
        );
        onSuccess(response.data);
    } catch (error) {
        onFailure(error);
    }
}

/*
|--------------------------------------------------------------------------
| Delete Tournament Match
|--------------------------------------------------------------------------
*/
export const deleteTournamentMatchRequest = (
    tournamentID,
    matchID,
    onSuccess,
    onFailure
) => ({
    type: TYPES.DELETE_TOURNAMENT_MATCH_REQUEST,
    tournamentID,
    matchID,
    onSuccess,
    onFailure
});

/**
 * delete Tournament Match
 *
 * @param action action type
 */
export function* deleteTournamentMatch(action) {
    const { tournamentID, matchID, onSuccess, onFailure } = action;
    try {
        const response = yield call(
            coreApi.delete,
            URLS.DELETE_TOURNAMENT_MATCH_URL.replace(':tournamentID', tournamentID).replace(':matchID', matchID),
        );
        onSuccess(response.data);
    } catch (error) {
        onFailure(error);
    }
}