import React from 'react';
import { SchoolForm } from "../components/school/SchoolForm";

class SchoolCreateOrEditPage extends React.Component {

    render() {
        const { id } = this.props.match.params;
        const title = (id == 0) ? 'Create School' : 'Edit School';
        return (
            <>
                <h1>{title}</h1>
                <SchoolForm id={id} />
            </>
        )
    }
}

export default SchoolCreateOrEditPage;
