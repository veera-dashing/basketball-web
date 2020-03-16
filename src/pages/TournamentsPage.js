import React from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

import { TournamentsList } from '../components/tournament/TournamentsList';

export const TournamentsPage = () => {

    let history = useHistory();

    const onAddTournamentClick = () => {
        history.push(`/tournaments/0/AddEdit`);
    }

    return (
        <>
            <h1>Tournaments</h1>
            <button key='btnAddTournament' onClick={() => onAddTournamentClick()} >
                Add
            </button>
            <TournamentsList />
        </>
    )
}