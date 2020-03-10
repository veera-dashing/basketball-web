import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import { TournamentSportsListHeader } from './TournamentSportsListHeader';
import { TournamentSportsListItem } from './TournamentSportsListItem';
import { fetchTournamentRequest } from "../../actions/tournamentActions";
import { getQueryParams } from '../../utilities/helpers';

export const TournamentSportsList = ({ tournamentID }) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [tournamentSports, setTournamentSports] = useState();

    //Executes on Page load
    useEffect(() => {
        const onSuccess = (response) => {
            setTournamentSports(response.data.sports);
        }
        const onError = (error) => {
            console.log('Error in fetchTournament: ', error);
        }
        const params = getQueryParams(window.location.href);
        params.includeSports = true;
        dispatch(fetchTournamentRequest(tournamentID, params, onSuccess, onError));
    }, []);

    const onAddTournamentSportClick = () => {
        alert('Add Sports popup coming soon');
    }

    return (
        <>
            <button key='btnAddTournamentSport' onClick={() => onAddTournamentSportClick()} >
                Add Sport
            </button>
            {(!tournamentSports || tournamentSports.length == 0) &&
                <div>
                    No sports have been configured for this tournament
                </div>
            }
            {tournamentSports &&
                <table width={'100%'} border={'1px'}>
                    <TournamentSportsListHeader />
                    {
                        tournamentSports.map((tournamentSport) => {
                            return (<TournamentSportsListItem tournamentID={tournamentID} tournamentSport={tournamentSport} />)
                        })
                    }
                </table>
            }
        </>
    )
}
