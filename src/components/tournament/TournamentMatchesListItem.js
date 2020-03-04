import React from 'react';
import { useHistory } from 'react-router-dom';

export const TournamentMatchesListItem = ({ tournamentID, tournamentMatch }) => {

    let history = useHistory();

    const onEditTournamentMatch = (tournamentID, matchID) => {
        history.push(`/tournaments/${tournamentID}/matches/${matchID}/AddEdit`);
    }

    return (
        <>
            <tr>
                <td>
                    <a href={""} onClick={() => onEditTournamentMatch(tournamentID, tournamentMatch.id)}>{tournamentMatch.id}</a>
                </td>
                <td>
                    {tournamentMatch.name}
                </td>
                <td>
                    <button key='btnAddTournament' onClick={() => onEditTournamentMatch(tournamentID, tournamentMatch.id)} >
                        Edit Match
                    </button>
                </td>
            </tr>
        </>
    )
}
