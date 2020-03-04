export const PER_PAGE = 20;

//Step 1: end point URL
export const FETCH_GIT_USERS_URL = '/users';
export const FETCH_GIT_USER_DETAILS_URL = '/users/';

export const FETCH_SCHOOLS_URL = '/schools';
export const FETCH_SCHOOL_URL = '/schools/:schoolID';
export const ADD_SCHOOL_URL = '/schools';
export const UPDATE_SCHOOL_URL = '/schools/:schoolID';
export const DELETE_SCHOOL_URL = '/schools/:schoolID';
export const FETCH_SCHOOL_USERS_URL = '/schools/:schoolID/users';
export const FETCH_SCHOOL_USER_URL = '/schools/:schoolID/users/:userID';
export const ADD_SCHOOL_USER_URL = '/schools/:schoolID/users';
export const UPDATE_SCHOOL_USER_URL = '/schools/:schoolID/users/:userID';
export const DELETE_SCHOOL_USER_URL = '/schools/:schoolID/users/:userID';

export const FETCH_TOURNAMENTS_URL = '/tournaments';
export const FETCH_TOURNAMENT_URL = '/tournaments/:tournamentID';
export const ADD_TOURNAMENT_URL = '/tournaments';
export const UPDATE_TOURNAMENT_URL = '/tournaments/:tournamentID';
export const DELETE_TOURNAMENT_URL = '/tournaments/:tournamentID';
export const FETCH_TOURNAMENT_MATCHES_URL = '/tournaments/:tournamentID/matches';
export const FETCH_TOURNAMENT_MATCH_URL = '/tournaments/:tournamentID/matches/:matchID';
export const ADD_TOURNAMENT_MATCH_URL = '/tournaments/:tournamentID/matches';
export const UPDATE_TOURNAMENT_MATCH_URL = '/tournaments/:tournamentID/matches/:matchID';
export const DELETE_TOURNAMENT_MATCH_URL = '/tournaments/:tournamentID/matches/:matchID';
