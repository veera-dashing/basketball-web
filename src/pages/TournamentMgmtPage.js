import React from 'react';

import { TournamentSportsList } from '../components/tournament/TournamentSportsList'
import { TournamentTeamsList } from '../components/tournament/TournamentTeamsList'
import { TournamentMatchesList } from '../components/tournament/TournamentMatchesList'

export const TournamentMgmtPage = ({ match }) => {

    const { tournamentID } = match.params;

    const onAddTournamentTeamClick = () => {
        alert('Add Team popup coming soon');
    }

    const onAddTournamentSportClick = () => {
        alert('Add Sports popup coming soon');
    }

    return (
        <>
            <h1>Tournament Management</h1>
            <h1>Teams</h1>
            <button key='btnAddTournamentTeam' onClick={() => onAddTournamentTeamClick()} >
                Add Team
            </button>
            <TournamentTeamsList tournamentID={tournamentID} />
            <h1>Sports</h1>
            <button key='btnAddTournamentSport' onClick={() => onAddTournamentSportClick()} >
                Add Sport
            </button>
            <TournamentSportsList tournamentID={tournamentID} />
        </>
    )
}