import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import { SchoolUsersList } from '../components/school/SchoolUsersList';
import { SchoolSportsList } from '../components/school/SchoolSportsList';
import { fetchSchoolRequest } from "../actions/schoolActions";
import { getQueryParams } from '../utilities/helpers';

export const SchoolMgmtPage = ({ match }) => {

    const { schoolID } = match.params;
    let history = useHistory();

    const dispatch = useDispatch();
    const [school, setSchool] = useState(
        {
            users: [],
            sports: [],
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
        //dispatch(fetchSchoolRequest(schoolID, params, onSuccess, onError));
    }, []);

    const onAddSchoolUserClick = () => {
        history.push(`/schools/${schoolID}/users/0/AddEdit`);
    }

    const onUpdateSchoolSportClick = () => {
        history.push();
    }

    return (
        <>
            <h1>School Management</h1>
            <h1>Users</h1>
            <button key='btnAddSchoolUser' onClick={() => onAddSchoolUserClick()} >
                Add
            </button>
            <SchoolUsersList schoolID={schoolID} />
            <h1>Sports</h1>
            <button key='btnUpdateSchoolSport' onClick={() => onUpdateSchoolSportClick()} >
                Update
            </button>
            <SchoolSportsList schoolID={schoolID} />
        </>
    )
}