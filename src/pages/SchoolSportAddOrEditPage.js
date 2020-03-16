import React from 'react';

import { SchoolSportForm } from "../components/school/SchoolSportForm";

export const SchoolSportAddOrEditPage = ({ match }) => {

    const { schoolID } = match.params;

    return (
        <>
            <h1>Add School Sports</h1>
            <SchoolSportForm schoolID={schoolID} />
        </>
    )
}