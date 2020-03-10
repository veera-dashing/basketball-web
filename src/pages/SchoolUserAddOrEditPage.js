import React from 'react';

import { SchoolUserForm } from "../components/school/SchoolUserForm";

class SchoolUserAddOrEditPage extends React.Component {

    render() {
        const { schoolID, userID } = this.props.match.params;
        const title = (userID == 0) ? 'Add School User' : 'Edit School User';
        return (
            <>
                <h1>{title}</h1>
                <SchoolUserForm schoolID={schoolID} userID={userID} />
            </>
        )
    }
}

export default SchoolUserAddOrEditPage;
