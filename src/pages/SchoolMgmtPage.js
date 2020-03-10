import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import { SchoolUsersList } from '../components/school/SchoolUsersList';
import { SchoolSportsList } from '../components/school/SchoolSportsList';
import { SchoolTeamsList } from '../components/school/SchoolTeamsList';
import { fetchSchoolRequest } from "../actions/schoolActions";
import { getQueryParams } from '../utilities/helpers';

export const SchoolMgmtPage = ({ match }) => {

    const { schoolID } = match.params;

    const dispatch = useDispatch();
    const [school, setSchool] = useState(
        {
            users: [],
            sports: [],
            teams: [],
        }
    );

    //Executes on Page load
    useEffect(() => {
        const onSuccess = (response) => {
            setSchool(response);
        }
        const onError = (error) => {
            console.log('Error in fetchSchool: ', error);
        }
        const params = getQueryParams(window.location.href);
        params.includeUsers = true;
        params.includeSports = true;
        params.includeTeams = true;
        dispatch(fetchSchoolRequest(schoolID, params, onSuccess, onError));
    }, []);

    return (
        <>
            <h1>School Management</h1>
            <h1>Users</h1>
            <SchoolUsersList schoolID={schoolID} schoolUsers={school.users} />
            <h1>Sports</h1>
            <SchoolSportsList schoolID={schoolID} schoolSports={school.sports} />
            <h1>Teams</h1>
            <SchoolTeamsList schoolID={schoolID} schoolTeams={school.teams} />
        </>
    )
}