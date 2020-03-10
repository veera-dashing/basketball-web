import React from 'react';

import { TournamentSportsList } from '../components/tournament/TournamentSportsList'
import { TournamentTeamsList } from '../components/tournament/TournamentTeamsList'
import { TournamentMatchesList } from '../components/tournament/TournamentMatchesList'

export const TournamentMgmtPage = (props) => {

    const { tournamentID } = props.match.params;

    return (
        <>
            <h1>Tournament Management</h1>
            <h1>Sports</h1>
            <TournamentSportsList tournamentID={tournamentID} />
            <h1>Teams</h1>
            <TournamentTeamsList tournamentID={tournamentID} />
            <h1>Matches</h1>
            <TournamentMatchesList tournamentID={tournamentID} />
        </>
    )
}