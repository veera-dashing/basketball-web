import React from 'react';

import { TournamentsList } from '../components/tournament/TournamentsList';

export const TournamentsPage = () => {

    const onAddTournamentClick = () => {
        const { history } = this.props;
        history.push(`/tournaments/0/AddEdit`);
    }

    return (
        <>
            <h1> Tournaments</h1>
            <button key='btnAddTournament' onClick={() => onAddTournamentClick()} >
                Add Tournament
            </button>
            <TournamentsList />
        </>
    )
}