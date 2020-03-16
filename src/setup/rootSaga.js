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
    fetchSchoolUsers,
    fetchSchoolUser,
    addSchoolUser,
    updateSchoolUser,
    deleteSchoolUser,
    fetchSchoolSports,
    updateSchoolSports,
    fetchSchoolSport,
    fetchSchoolSportTeams,
    fetchSchoolSportTeam,
    addSchoolSportTeam,
    updateSchoolSportTeam,
    deleteSchoolSportTeam,
} from "../actions/schoolActions";
import {
    fetchTournaments,
    fetchTournament,
    addTournament,
    updateTournament,
    deleteTournament,
    fetchTournamentMatches,
    fetchTournamentMatch,
    addTournamentMatch,
    updateTournamentMatch,
    deleteTournamentMatch,
} from "../actions/tournamentActions";

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
    yield takeLatest(TYPES.FETCH_SCHOOL_USERS_REQUEST, fetchSchoolUsers);
    yield takeLatest(TYPES.FETCH_SCHOOL_USER_REQUEST, fetchSchoolUser);
    yield takeLatest(TYPES.ADD_SCHOOL_USER_REQUEST, addSchoolUser);
    yield takeLatest(TYPES.UPDATE_SCHOOL_USER_REQUEST, updateSchoolUser);
    yield takeLatest(TYPES.DELETE_SCHOOL_USER_REQUEST, deleteSchoolUser);
    yield takeLatest(TYPES.FETCH_SCHOOL_SPORTS_REQUEST, fetchSchoolSports);
    yield takeLatest(TYPES.UPDATE_SCHOOL_SPORTS_REQUEST, updateSchoolSports);
    yield takeLatest(TYPES.FETCH_SCHOOL_SPORT_REQUEST, fetchSchoolSport);
    yield takeLatest(TYPES.FETCH_SCHOOL_SPORT_TEAMS_REQUEST, fetchSchoolSportTeams);
    yield takeLatest(TYPES.FETCH_SCHOOL_SPORT_TEAM_REQUEST, fetchSchoolSportTeam);
    yield takeLatest(TYPES.ADD_SCHOOL_SPORT_TEAM_REQUEST, addSchoolSportTeam);
    yield takeLatest(TYPES.UPDATE_SCHOOL_SPORT_TEAM_REQUEST, updateSchoolSportTeam);
    yield takeLatest(TYPES.DELETE_SCHOOL_SPORT_TEAM_REQUEST, deleteSchoolSportTeam);

    yield takeLatest(TYPES.FETCH_TOURNAMENTS_REQUEST, fetchTournaments);
    yield takeLatest(TYPES.FETCH_TOURNAMENT_REQUEST, fetchTournament);
    yield takeLatest(TYPES.ADD_TOURNAMENT_REQUEST, addTournament);
    yield takeLatest(TYPES.UPDATE_TOURNAMENT_REQUEST, updateTournament);
    yield takeLatest(TYPES.DELETE_TOURNAMENT_REQUEST, deleteTournament);
    yield takeLatest(TYPES.FETCH_TOURNAMENT_MATCHES_REQUEST, fetchTournamentMatches);
    yield takeLatest(TYPES.FETCH_TOURNAMENT_MATCH_REQUEST, fetchTournamentMatch);
    yield takeLatest(TYPES.ADD_TOURNAMENT_MATCH_REQUEST, addTournamentMatch);
    yield takeLatest(TYPES.UPDATE_TOURNAMENT_MATCH_REQUEST, updateTournamentMatch);
    yield takeLatest(TYPES.DELETE_TOURNAMENT_MATCH_REQUEST, deleteTournamentMatch);
}
