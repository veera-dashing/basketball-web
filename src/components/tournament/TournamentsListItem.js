import React from 'react';
import { useHistory } from 'react-router-dom';

export const TournamentsListItem = ({ tournament }) => {

    let history = useHistory();

    const onManageTournament = (id) => {
        history.push(`/tournaments/${id}/Manage`);
    }

    const onEditTournament = (id) => {
        history.push(`/tournaments/${id}/AddEdit`);
    }

    return (
        <>
            <tr>
                <td>
                    <a href={""} onClick={() => onEditTournament(tournament.id)}>{tournament.id}</a>
                </td>
                <td>
                    {tournament.name}
                </td>
                <td>
                    <button key='btnAddTournament' onClick={() => onEditTournament(tournament.id)} >
                        Edit Tournament
                    </button>
                    <button key='btnAddTournament' onClick={() => onManageTournament(tournament.id)} >
                        Manage Tournament
                    </button>
                </td>
            </tr>
        </>
    )
}
