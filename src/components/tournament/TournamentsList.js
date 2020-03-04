import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { TournamentsListHeader } from './TournamentsListHeader';
import { TournamentsListItem } from './TournamentsListItem';
import { fetchTournamentsRequest } from "../../actions/tournamentActions";
import { getQueryParams } from '../../utilities/helpers';

export const TournamentsList = () => {

    const dispatch = useDispatch();

    const tournaments = useSelector(state => state.tournamentState.tournaments);
    console.log('tournaments: ', tournaments);

    //Executes on Page load
    useEffect(() => {
        if (!tournaments || tournaments.length == 0) {
            const onSuccess = (response) => {

            }
            const onError = (error) => {
                console.log('Error in fetchTournaments: ', error);
            }
            const params = getQueryParams(window.location.href);
            dispatch(fetchTournamentsRequest(params, onSuccess, onError));
        }
    }, []);

    return (
        <>{tournaments &&
            <table width={'100%'} border={'1px'}>
                <TournamentsListHeader />
                {
                    tournaments.map((tournament) => {
                        return (<TournamentsListItem tournament={tournament} />)
                    })
                }
            </table>
        }
        </>
    )
}
