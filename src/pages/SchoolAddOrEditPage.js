import React from 'react';

import { SchoolInfoForm } from "../components/school/SchoolInfoForm";

class SchoolAddOrEditPage extends React.Component {

    render() {
        const { schoolID } = this.props.match.params;
        const title = (schoolID == 0) ? 'Add School' : 'Edit School';
        return (
            <>
                <h1>{title}</h1>
                <SchoolInfoForm id={schoolID} />
            </>
        )
    }
}

export default SchoolAddOrEditPage;
