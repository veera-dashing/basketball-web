import React from 'react';
import { SchoolForm } from "../components/school/SchoolForm";

class SchoolAddOrEditPage extends React.Component {

    render() {
        const { schoolID } = this.props.match.params;
        const title = (schoolID == 0) ? 'Add School' : 'Edit School';
        return (
            <>
                <h1>{title}</h1>
                <SchoolForm id={schoolID} />
            </>
        )
    }
}

export default SchoolAddOrEditPage;
