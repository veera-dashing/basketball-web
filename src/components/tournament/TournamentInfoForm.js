import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';

import { tournamentValidationSchema } from './constants';
import { RenderInputField } from '../ui/FormElement';
import {
    fetchTournamentRequest,
    addTournamentRequest,
    updateTournamentRequest
} from '../../actions/tournamentActions';

export const TournamentInfoForm = ({ id }) => {
    const dispatch = useDispatch();
    let history = useHistory();

    const [currentTournament, setCurrentTournament] = useState({
        name: '',
        email: '',
        address: '',
        contactNumber: ''
    });
    console.log('currentTournament: ' + currentTournament);

    useEffect(() => {
        if (id != 0) {
            const onSuccess = (response) => {
                setCurrentTournament(response.data.data);
            }
            const onError = (error) => {
                console.log('Error in fetchTournament: ', error);
            }
            dispatch(fetchTournamentRequest(id, onSuccess, onError));
        }
    }, []);

    const onSaveTournament = (data) => {
        if (!data.id) {
            const onSuccess = (response) => {
                history.push(`/tournaments`);
            }
            const onError = (error) => {
                console.log('Error in addTournament: ', error);
                history.push(`/tournaments`);
            }
            dispatch(addTournamentRequest(data, onSuccess, onError));
        } else {
            const onSuccess = (response) => {
                history.push(`/tournaments`);
            }
            const onError = (error) => {
                console.log('Error in updateTournament: ', error);
                history.push(`/tournaments`);
            }
            dispatch(updateTournamentRequest(data.id, data, onSuccess, onError));
        }
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: currentTournament,
        validationSchema: tournamentValidationSchema,
        onSubmit: values => {
            //alert(JSON.stringify(values, null, 2));
            onSaveTournament(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <RenderInputField name={'name'} label={'Name'} formik={formik} />
            <button type="submit">Submit</button>
        </form>
    );
};
