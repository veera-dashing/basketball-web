import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';

import { schoolUserValidationSchema } from './constants';
import { RenderInputField } from '../ui/FormElement';
import {
    fetchSchoolUserRequest,
    addSchoolUserRequest,
    updateSchoolUserRequest
} from '../../actions/schoolActions';

export const SchoolUserInfoForm = ({ schoolID, userID }) => {
    const dispatch = useDispatch();
    let history = useHistory();

    const [currentUser, setCurrentUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: ''
    });
    console.log('currentUser: ' + currentUser);

    useEffect(() => {
        if (userID != 0) {
            const onSuccess = (response) => {
                setCurrentUser(response.data);
            }
            const onError = (error) => {
                console.log('Error in fetchSchoolUser: ', error);
            }
            dispatch(fetchSchoolUserRequest(schoolID, userID, onSuccess, onError));
        }
    }, []);

    const onSaveSchoolUser = (data) => {
        if (!data.id) {
            const onSuccess = (response) => {
                history.push(`/schools/${schoolID}/users`);
            }
            const onError = (error) => {
                console.log('Error in addSchoolUser: ', error);
                history.push(`/schools/${schoolID}/users`);
            }
            dispatch(addSchoolUserRequest(schoolID, data, onSuccess, onError));
        } else {
            const onSuccess = (response) => {
                history.push(`/schools/${schoolID}/users`);
            }
            const onError = (error) => {
                console.log('Error in updateSchoolUser: ', error);
                history.push(`/schools/${schoolID}/users`);
            }
            dispatch(updateSchoolUserRequest(schoolID, data.id, data, onSuccess, onError));
        }
    }

    const onCancelClick = () => {
        history.push(`/schools/${schoolID}/manage`);
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: currentUser,
        validationSchema: schoolUserValidationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            onSaveSchoolUser(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <RenderInputField name={'firstName'} label={'First Name'} formik={formik} />
            <RenderInputField name={'lastName'} label={'Last Name'} formik={formik} />
            <RenderInputField name={'email'} label={'Email'} type='email' formik={formik} />
            <RenderInputField name={'contactNumber'} label={'Contact Number'} formik={formik} />
            <button key='btnCancel' onClick={() => onCancelClick()} >
                Cancel
            </button>
            <button type="submit">Submit</button>
        </form>
    );
};
