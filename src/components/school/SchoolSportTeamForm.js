import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';

import { schoolTeamValidationSchema } from './constants';
import { RenderInputField } from '../ui/FormElement';
import {
    fetchSchoolTeamRequest,
    addSchoolTeamRequest,
    updateSchoolTeamRequest
} from '../../actions/schoolActions';

export const SchoolSportTeamForm = ({ schoolID, teamID }) => {
    const dispatch = useDispatch();
    let history = useHistory();

    const [currentTeam, setCurrentTeam] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: ''
    });
    console.log('currentTeam: ' + currentTeam);

    useEffect(() => {
        if (teamID != 0) {
            const onSuccess = (response) => {
                setCurrentTeam(response.data);
            }
            const onError = (error) => {
                console.log('Error in fetchSchoolTeam: ', error);
            }
            dispatch(fetchSchoolTeamRequest(schoolID, teamID, onSuccess, onError));
        }
    }, []);

    const onSaveSchoolTeam = (data) => {
        if (!data.id) {
            const onSuccess = (response) => {
                history.push(`/schools/${schoolID}/teams`);
            }
            const onError = (error) => {
                console.log('Error in addSchoolTeam: ', error);
                history.push(`/schools/${schoolID}/teams`);
            }
            dispatch(addSchoolTeamRequest(schoolID, data, onSuccess, onError));
        } else {
            const onSuccess = (response) => {
                history.push(`/schools/${schoolID}/teams`);
            }
            const onError = (error) => {
                console.log('Error in updateSchoolTeam: ', error);
                history.push(`/schools/${schoolID}/teams`);
            }
            dispatch(updateSchoolTeamRequest(schoolID, data.id, data, onSuccess, onError));
        }
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: currentTeam,
        validationSchema: schoolTeamValidationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            onSaveSchoolTeam(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <RenderInputField name={'name'} label={'Name'} formik={formik} />
            <button type="submit">Submit</button>
        </form>
    );
};
