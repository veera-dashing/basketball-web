import React from 'react';

import { SchoolInfoForm } from "../components/school/SchoolInfoForm";

export const SchoolAddOrEditPage = ({ match }) => {

    const { schoolID } = match.params;
    const title = (schoolID == 0) ? 'Add School' : 'Edit School';

    return (
        <>
            <h1>{title}</h1>
            <SchoolInfoForm id={schoolID} />
        </>
    )
}