import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { TournamentMatchesListHeader } from './TournamentMatchesListHeader';
import { TournamentMatchesListItem } from './TournamentMatchesListItem';
import { fetchTournamentMatchesRequest } from "../../actions/tournamentActions";
import { getQueryParams } from '../../utilities/helpers';

export const TournamentMatchesList = ({ tournamentID }) => {

    const dispatch = useDispatch();
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

    return (
        <>{tournamentMatches &&
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
