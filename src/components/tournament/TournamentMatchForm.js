import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';

import { tournamentMatchValidationSchema } from './constants';
import { RenderInputField } from '../ui/FormElement';
import {
    fetchTournamentMatchRequest,
    addTournamentMatchRequest,
    updateTournamentMatchRequest
} from '../../actions/tournamentActions';

export const TournamentMatchForm = ({ tournamentID, matchID }) => {
    const dispatch = useDispatch();
    let history = useHistory();

    const [currentMatch, setCurrentMatch] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: ''
    });
    console.log('currentMatch: ' + currentMatch);

    useEffect(() => {
        if (matchID != 0) {
            const onSuccess = (response) => {
                setCurrentMatch(response.data);
            }
            const onError = (error) => {
                console.log('Error in fetchTournamentMatch: ', error);
            }
            dispatch(fetchTournamentMatchRequest(tournamentID, matchID, onSuccess, onError));
        }
    }, []);

    const onSaveTournamentMatch = (data) => {
        if (!data.id) {
            const onSuccess = (response) => {
                history.push(`/tournaments/${tournamentID}/matches`);
            }
            const onError = (error) => {
                console.log('Error in addTournamentMatch: ', error);
                history.push(`/tournaments/${tournamentID}/matches`);
            }
            dispatch(addTournamentMatchRequest(tournamentID, data, onSuccess, onError));
        } else {
            const onSuccess = (response) => {
                history.push(`/tournaments/${tournamentID}/matches`);
            }
            const onError = (error) => {
                console.log('Error in updateTournamentMatch: ', error);
                history.push(`/tournaments/${tournamentID}/matches`);
            }
            dispatch(updateTournamentMatchRequest(tournamentID, data.id, data, onSuccess, onError));
        }
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: currentMatch,
        validationSchema: tournamentMatchValidationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            onSaveTournamentMatch(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <RenderInputField name={'name'} label={'First Name'} formik={formik} />
            <button type="submit">Submit</button>
        </form>
    );
};
