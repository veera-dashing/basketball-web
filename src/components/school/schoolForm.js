import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';

import { schoolValidationSchema } from './constants';
import { RenderInputField } from '../ui/FormElement';
import {
    fetchSchoolRequest,
    addSchoolRequest,
    updateSchoolRequest
} from '../../actions/schoolActions';

export const SchoolForm = ({ id }) => {
    const dispatch = useDispatch();
    let history = useHistory();

    const [currentSchool, setCurrentSchool] = useState({
        name: '',
        email: '',
        address: '',
        contactNumber: ''
    });
    console.log('currentSchool: ' + currentSchool);

    useEffect(() => {
        if (id != 0) {
            const onSuccess = (response) => {
                setCurrentSchool(response.data.data);
            }
            const onError = (error) => {
                console.log('Error in fetchSchool: ', error);
            }
            dispatch(fetchSchoolRequest(id, onSuccess, onError));
        }
    }, []);

    const onSaveSchool = (data) => {
        if (!data.id) {
            const onSuccess = (response) => {
                history.push(`/schools`);
            }
            const onError = (error) => {
                console.log('Error in addSchool: ', error);
                history.push(`/schools`);
            }
            dispatch(addSchoolRequest(data, onSuccess, onError));
        } else {
            const onSuccess = (response) => {
                history.push(`/schools`);
            }
            const onError = (error) => {
                console.log('Error in updateSchool: ', error);
                history.push(`/schools`);
            }
            dispatch(updateSchoolRequest(data.id, data, onSuccess, onError));
        }
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: currentSchool,
        validationSchema: schoolValidationSchema,
        onSubmit: values => {
            //alert(JSON.stringify(values, null, 2));
            onSaveSchool(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <RenderInputField name={'name'} label={'Name'} formik={formik} />
            <RenderInputField name={'email'} label={'Email'} type='email' formik={formik} />
            <RenderInputField name={'address'} label={'Address'} formik={formik} />
            <RenderInputField name={'contactNumber'} label={'Contact Number'} formik={formik} />
            <button type="submit">Submit</button>
        </form>
    );
};
