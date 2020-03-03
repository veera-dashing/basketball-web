import React from 'react';

import { SchoolUsersList } from '../components/school/SchoolUsersList';

class SchoolUsersPage extends React.Component {

    onAddSchoolUserClick = (schoolID) => {
        const { history } = this.props;
        history.push(`/schools/${schoolID}/users/0/AddEdit`);
    }

    render() {
        return (
            <>
                <h1> Schools</h1>
                <button key='btnAddSchoolUser' onClick={this.onAddSchoolUserClick} >
                    Add User
                </button>
                <SchoolUsersList />
            </>
        )
    }
}

export default SchoolUsersPage;