import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import { SchoolSportTeamsListHeader } from './SchoolSportTeamsListHeader';
import { SchoolSportTeamsListItem } from './SchoolSportTeamsListItem';
import { fetchSchoolRequest } from "../../actions/schoolActions";
import { getQueryParams } from '../../utilities/helpers';

export const SchoolSportTeamsList = ({ schoolID }) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [schoolSportTeams, setSchoolSportTeams] = useState();

    //Executes on Page load
    useEffect(() => {
        const onSuccess = (response) => {
            setSchoolSportTeams(response.data.sportTeams);
        }
        const onError = (error) => {
            console.log('Error in fetchSchool: ', error);
        }
        const params = getQueryParams(window.location.href);
        params.includeSportTeams = true;
        dispatch(fetchSchoolRequest(schoolID, params, onSuccess, onError));
    }, []);

    const onAddSchoolTeamClick = () => {
        history.push(`/schools/${schoolID}/teams/0/addEdit`);
    }

    return (
        <>
            <button key='btnAddSchoolTeam' onClick={() => onAddSchoolTeamClick()} >
                Add Team
            </button>
            {(!schoolSportTeams || schoolSportTeams.length == 0) &&
                <div>
                    No teams have been configured for this School
                </div>
            }
            {schoolSportTeams &&
                <table width={'100%'} border={'1px'}>
                    <SchoolSportTeamsListHeader />
                    {
                        schoolSportTeams.map((schoolSportTeam) => {
                            return (<SchoolSportTeamsListItem schoolID={schoolID} schoolSportTeam={schoolSportTeam} />)
                        })
                    }
                </table>
            }
        </>
    )
}
