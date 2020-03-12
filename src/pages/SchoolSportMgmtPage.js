import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import { SchoolSportsList } from '../components/school/SchoolSportsList';
import { SchoolSportTeamsList } from '../components/school/SchoolSportTeamsList';
import {
    fetchSchoolSportsRequest,
    fetchSchoolSportRequest
} from "../actions/schoolActions";
import { getQueryParams } from '../utilities/helpers';

export const SchoolSportMgmtPage = ({ match }) => {

    const { schoolID } = match.params;

    const dispatch = useDispatch();
    const [schoolSports, setSchoolSports] = useState();
    const [schoolSportTeams, setSchoolSportTeams] = useState();

    //Executes on Page load
    useEffect(() => {
        const onSuccess = (response) => {
            setSchoolSports(response);
        }
        const onError = (error) => {
            console.log('Error in fetchSchool: ', error);
        }
        dispatch(fetchSchoolSportsRequest(schoolID, onSuccess, onError));
    }, []);

    const onSchoolSportsDropwnChange = (schoolSportID) => {

        const onSuccess = (response) => {
            setSchoolSportTeams(response);
        }
        const onError = (error) => {
            console.log('Error in fetchSchool: ', error);
        }

        dispatch(fetchSchoolSportRequest(schoolID, schoolSportID, { includeTeams: true }, onSuccess, onError));
    };

    return (
        <>
            <h1>Sport Management</h1>
            <h1>Sports</h1>
            <SchoolSportsList schoolID={schoolID} schoolSports={schoolSports} />
            {schoolSportTeams && schoolSportTeams.length > 0 &&
                <div>
                    <h1>Teams</h1>
                    <SchoolSportTeamsList schoolID={schoolID} schoolSportTeams={schoolSportTeams} />
                </div>
            }
        </>
    )
}