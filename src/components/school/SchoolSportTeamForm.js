import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';

import { schoolTeamValidationSchema } from './constants';
import { RenderInputField } from '../ui/FormElement';
import {
    fetchSchoolSportTeamRequest,
    addSchoolSportTeamRequest,
    updateSchoolSportTeamRequest
} from '../../actions/schoolActions';

export const SchoolSportTeamForm = ({ schoolID, sportID, teamID }) => {
    const dispatch = useDispatch();
    let history = useHistory();

    const [currentTeam, setCurrentTeam] = useState({
        name: '',
    });
    console.log('currentTeam: ' + currentTeam);

    useEffect(() => {
        if (teamID != 0) {
            const onSuccess = (response) => {
                setCurrentTeam(response.data);
            }
            const onError = (error) => {
                console.log('Error in fetchSchoolSportTeam: ', error);
            }
            dispatch(fetchSchoolSportTeamRequest(schoolID, sportID, teamID, onSuccess, onError));
        }
    }, []);

    const onSaveSchoolSportTeam = (data) => {
        if (!data.id) {
            const onSuccess = (response) => {
                history.push(`/schools/${schoolID}/sports/${sportID}/manage`);
            }
            const onError = (error) => {
                console.log('Error in addSchoolTeam: ', error);
                history.push(`/schools/${schoolID}/sports/${sportID}/manage`);
            }
            dispatch(addSchoolSportTeamRequest(schoolID, sportID, data, onSuccess, onError));
        } else {
            const onSuccess = (response) => {
                history.push(`/schools/${schoolID}/sports/${sportID}/manage`);
            }
            const onError = (error) => {
                console.log('Error in updateSchoolTeam: ', error);
                history.push(`/schools/${schoolID}/sports/${sportID}/manage`);
            }
            dispatch(updateSchoolSportTeamRequest(schoolID, sportID, data.id, data, onSuccess, onError));
        }
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: currentTeam,
        validationSchema: schoolTeamValidationSchema,
        onSubmit: values => {
            //alert(JSON.stringify(values, null, 2));
            onSaveSchoolSportTeam(values);
        },
    });

    const onCancelFormClick = () => {
        history.push(`/schools/${schoolID}/sports/${sportID}/manage`);
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <RenderInputField name={'name'} label={'Name'} formik={formik} />
            <button key='btnCancelForm' onClick={() => onCancelFormClick()} >Cancel</button>
            <button key='btnSubmitForm' type="submit">Submit</button>
        </form>
    );
};
