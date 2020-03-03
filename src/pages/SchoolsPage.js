import React from 'react';

import { SchoolsList } from '../components/school/SchoolsList';

class SchoolsPage extends React.Component {

    onAddSchoolClick = () => {
        const { history } = this.props;
        history.push(`/schools/0/AddEdit`);
    }

    render() {
        return (
            <>
                <h1> Schools</h1>
                <button key='btnAddSchool' onClick={this.onAddSchoolClick} >
                    Add School
                </button>
                <SchoolsList />
            </>
        )
    }
}

export default SchoolsPage;