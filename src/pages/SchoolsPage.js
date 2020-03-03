import React from 'react';

import { SchoolsList } from '../components/school/SchoolsList';

class SchoolsPage extends React.Component {

    onCreateSchoolClick = () => {
        const { history } = this.props;
        history.push(`/schools/0/CreateEdit`);
    }

    render() {
        return (
            <>
                <h1> Schools</h1>
                <button key='btnCreateSchool' onClick={this.onCreateSchoolClick} >
                    Create School
                </button>
                <SchoolsList />
            </>
        )
    }
}

export default SchoolsPage;