import React from 'react';
import { useHistory } from 'react-router-dom';

export const TournamentTeamsListItem = ({ tournamentID, tournamentTeam }) => {

    let history = useHistory();

    const onAddRemoveTournamentTeamClick = (tournamentID, teamID, teamAdded) => {
        
    }

    return (
        <>
            <tr>
                <td>
                    {tournamentTeam.id}
                </td>
                <td>
                    {tournamentTeam.name}
                </td>
                <td>
                    <button key='btnAddTournamentTeam' onClick={() => onAddRemoveTournamentTeamClick(tournamentID, tournamentTeam.id, true)} >
                        Add Team
                    </button>
                </td>
            </tr>
        </>
    )
}
