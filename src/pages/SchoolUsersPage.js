import React from 'react';

import { SchoolUsersList } from '../components/school/SchoolUsersList';

class SchoolUsersPage extends React.Component {

    onAddSchoolUserClick = () => {
        const { history } = this.props;
        const { schoolID } = this.props.match.params;
        history.push(`/schools/${schoolID}/users/0/AddEdit`);
    }

    render() {
        const { schoolID } = this.props.match.params;
        return (
            <>
                <h1> Users</h1>
                <button key='btnAddSchoolUser' onClick={this.onAddSchoolUserClick} >
                    Add User
                </button>
                <SchoolUsersList schoolID={schoolID} />
            </>
        )
    }
}

export default SchoolUsersPage;