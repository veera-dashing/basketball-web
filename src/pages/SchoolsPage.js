import React from 'react';
import { SchoolsList } from '../components/school/SchoolsList';

class SchoolsPage extends React.Component {
    render() {
        const { schools } = this.props;
        return (
            <>
                <h1> This is schools listing page</h1>
                <button key='btnAddSchool' >
                    Add School
                </button>
                <SchoolsList schools={schools} />
            </>
        )
    }
}

export default SchoolsPage;