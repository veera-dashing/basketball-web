import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import { SchoolSportTeamsList } from '../components/school/SchoolSportTeamsList';
import {
    fetchSchoolSportTeamsRequest
} from "../actions/schoolActions";
import { getQueryParams } from '../utilities/helpers';

export const SchoolSportMgmtPage = ({ match }) => {

    const { schoolID, sportID } = match.params;

    const dispatch = useDispatch();
    const [schoolSportTeams, setSchoolSportTeams] = useState([]);

    //Executes on Page load
    useEffect(() => {
        const onSuccess = (response) => {
            setSchoolSportTeams(response);
        }
        const onError = (error) => {
            console.log('Error in fetchSchoolSportTeams: ', error);
        }
        //dispatch(fetchSchoolSportTeamsRequest(schoolID, sportID, onSuccess, onError));
    }, []);

    return (
        <>
            <h1>Sport Management</h1>
            <h1>Teams</h1>
            <SchoolSportTeamsList schoolID={schoolID} sportID={sportID} schoolSportTeams={schoolSportTeams} />
        </>
    )
}