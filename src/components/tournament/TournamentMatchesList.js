import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import { TournamentMatchesListHeader } from './TournamentMatchesListHeader';
import { TournamentMatchesListItem } from './TournamentMatchesListItem';
import { fetchTournamentMatchesRequest } from "../../actions/tournamentActions";
import { getQueryParams } from '../../utilities/helpers';

export const TournamentMatchesList = ({ tournamentID }) => {

    const dispatch = useDispatch();
    let history = useHistory();
    const [tournamentMatches, setTournamentMatches] = useState();

    //Executes on Page load
    useEffect(() => {
        const onSuccess = (response) => {
            setTournamentMatches(response.data)
        }
        const onError = (error) => {
            console.log('Error in fetchTournaments: ', error);
        }
        const params = getQueryParams(window.location.href);
        dispatch(fetchTournamentMatchesRequest(tournamentID, params, onSuccess, onError));
    }, []);

    const onAddTournamentMatchClick = () => {
        history.push(`/tournaments/${tournamentID}/matches/0/AddEdit`);
    }

    return (
        <>
            <button key='btnAddTournamentMatch' onClick={() => onAddTournamentMatchClick()} >
                Add Match
            </button>
            {(!tournamentMatches || tournamentMatches.length == 0) &&
                'No matches have been configured for this tournament'
            }
            {tournamentMatches &&
                <table width={'100%'} border={'1px'}>
                    <TournamentMatchesListHeader />
                    {
                        tournamentMatches.map((tournamentMatch) => {
                            return (<TournamentMatchesListItem tournamentID={tournamentID} tournamentMatch={tournamentMatch} />)
                        })
                    }
                </table>
            }
        </>
    )
}
