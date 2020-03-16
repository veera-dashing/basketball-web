import React from 'react';

import { SchoolUserInfoForm } from "../components/school/SchoolUserInfoForm";

export const SchoolUserAddOrEditPage = ({ match }) => {

    const { schoolID, userID } = match.params;
    const title = (userID == 0) ? 'Add User' : 'Edit User';

    return (
        <>
            <h1>{title}</h1>
            <SchoolUserInfoForm schoolID={schoolID} userID={userID} />
        </>
    )
}

export default SchoolUserAddOrEditPage;
