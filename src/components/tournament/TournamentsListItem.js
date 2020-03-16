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
                    <button key='btnEditTournament' onClick={() => onEditTournament(tournament.id)} >
                        Edit
                    </button>
                    <button key='btnManageTournament' onClick={() => onManageTournament(tournament.id)} >
                        Manage
                    </button>
                </td>
            </tr>
        </>
    )
}
