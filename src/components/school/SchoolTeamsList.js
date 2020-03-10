import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import { SchoolTeamsListHeader } from './SchoolTeamsListHeader';
import { SchoolTeamsListItem } from './SchoolTeamsListItem';
import { fetchSchoolRequest } from "../../actions/schoolActions";
import { getQueryParams } from '../../utilities/helpers';

export const SchoolTeamsList = ({ schoolID }) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [schoolTeams, setSchoolTeams] = useState();

    //Executes on Page load
    useEffect(() => {
        const onSuccess = (response) => {
            setSchoolTeams(response.data.teams);
        }
        const onError = (error) => {
            console.log('Error in fetchSchool: ', error);
        }
        const params = getQueryParams(window.location.href);
        params.includeTeams = true;
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
            {(!schoolTeams || schoolTeams.length == 0) &&
                <div>
                    No teams have been configured for this School
                </div>
            }
            {schoolTeams &&
                <table width={'100%'} border={'1px'}>
                    <SchoolTeamsListHeader />
                    {
                        schoolTeams.map((schoolTeam) => {
                            return (<SchoolTeamsListItem schoolID={schoolID} schoolTeam={schoolTeam} />)
                        })
                    }
                </table>
            }
        </>
    )
}
