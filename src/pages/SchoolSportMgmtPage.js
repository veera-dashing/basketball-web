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
    let history = useHistory();
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

    const onAddSchoolSportTeamClick = () => {
        history.push(`/schools/${schoolID}/sports/${sportID}/teams/0/addEdit`);
    }

    return (
        <>
            <h1>Sport Management</h1>
            <h1>Teams</h1>
            <button key='btnAddSchoolSportTeam' onClick={() => onAddSchoolSportTeamClick()} >
                Add
            </button>
            <SchoolSportTeamsList schoolID={schoolID} sportID={sportID} schoolSportTeams={schoolSportTeams} />
        </>
    )
}