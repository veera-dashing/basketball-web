import React from 'react';
import { useHistory } from 'react-router-dom';

export const TournamentSportsListItem = ({ tournamentID, tournamentSport }) => {

    let history = useHistory();

    const onAddRemoveTournamentSportClick = (tournamentID, sportID, sportAdded) => {

    }

    return (
        <>
            <tr>
                <td>
                    {tournamentSport.id}
                </td>
                <td>
                    {tournamentSport.name}
                </td>
                <td>
                    <button key='btnAddTournamentSport' onClick={() => onAddRemoveTournamentSportClick(tournamentID, tournamentSport.id, true)} >
                        Add Sport
                    </button>
                </td>
            </tr>
        </>
    )
}
