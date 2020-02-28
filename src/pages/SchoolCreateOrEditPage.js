import React from 'react';
import { SchoolForm } from "../components/school/schoolForm";

class SchoolCreateOrEditPage extends React.Component {

    handleSaveSchool = (values) => {
        console.log('values from form ', values);
    }

    render() {
        return (
            <>
                <h1> School Create or Edit Page</h1>
                <SchoolForm onSaveSchool={this.handleSaveSchool} />
            </>
        )
    }
}

export default SchoolCreateOrEditPage;
