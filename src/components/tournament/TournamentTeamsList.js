import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { TournamentTeamsListHeader } from './TournamentTeamsListHeader';
import { TournamentTeamsListItem } from './TournamentTeamsListItem';
import { fetchTournamentRequest } from "../../actions/tournamentActions";
import { getQueryParams } from '../../utilities/helpers';

export const TournamentTeamsList = ({ tournamentID }) => {

    const dispatch = useDispatch();
    const [tournamentTeams, setTournamentTeams] = useState();

    //Executes on Page load
    useEffect(() => {
        const onSuccess = (response) => {
            setTournamentTeams(response.data.sports);
        }
        const onError = (error) => {
            console.log('Error in fetchTournament: ', error);
        }
        const params = getQueryParams(window.location.href);
        params.includeTeams = true;
        dispatch(fetchTournamentRequest(tournamentID, params, onSuccess, onError));
    }, []);

    const onAddTournamentTeamClick = () => {
        alert('Add Team popup coming soon');
    }

    return (
        <>
            <button key='btnAddTournamentTeam' onClick={() => onAddTournamentTeamClick()} >
                Add Team
            </button>
            {(!tournamentTeams || tournamentTeams.length == 0) &&
                <div>
                    No teams have been configured for this tournament
                </div>
            }
            {tournamentTeams &&
                <table width={'100%'} border={'1px'}>
                    <TournamentTeamsListHeader />
                    {
                        tournamentTeams.map((tournamentTeam) => {
                            return (<TournamentTeamsListItem tournamentID={tournamentID} tournamentTeam={tournamentTeam} />)
                        })
                    }
                </table>
            }
        </>
    )
}
