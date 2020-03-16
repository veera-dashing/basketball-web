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

    const [currentSchoolUser, setCurrentSchoolUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: ''
    });

    useEffect(() => {
        if (userID != 0) {
            const onSuccess = (response) => {
                setCurrentSchoolUser(response.data);
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
                history.push(`/schools/${schoolID}/manage`);
            }
            const onError = (error) => {
                console.log('Error in addSchoolUser: ', error);
                history.push(`/schools/${schoolID}/manage`);
            }
            dispatch(addSchoolUserRequest(schoolID, data, onSuccess, onError));
        } else {
            const onSuccess = (response) => {
                history.push(`/schools/${schoolID}/manage`);
            }
            const onError = (error) => {
                console.log('Error in updateSchoolUser: ', error);
                history.push(`/schools/${schoolID}/manage`);
            }
            dispatch(updateSchoolUserRequest(schoolID, data.id, data, onSuccess, onError));
        }
    }

    const onCancelUserInfoFormClick = () => {
        history.push(`/schools/${schoolID}/manage`);
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: currentSchoolUser,
        validationSchema: schoolUserValidationSchema,
        onSubmit: values => {
            onSaveSchoolUser(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <RenderInputField name={'firstName'} label={'First Name'} formik={formik} />
            <RenderInputField name={'lastName'} label={'Last Name'} formik={formik} />
            <RenderInputField name={'email'} label={'Email'} type='email' formik={formik} />
            <RenderInputField name={'contactNumber'} label={'Contact Number'} formik={formik} />
            <button key='btnCancelUserInfoForm' onClick={() => onCancelUserInfoFormClick()} >Cancel</button>
            <button key='btnSubmitUserInfoForm' type="submit">Submit</button>
        </form>
    );
};
