import React from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

import { SchoolsList } from '../components/school/SchoolsList';

export const SchoolsPage = () => {

    const dispatch = useDispatch();
    let history = useHistory();

    const onAddSchoolClick = () => {
        history.push(`/schools/0/AddEdit`);
    }

    return (
        <>
            <h1> Schools</h1>
            <button key='btnAddSchool' onClick={() => onAddSchoolClick()} >
                Add
                </button>
            <SchoolsList />
        </>
    )
}