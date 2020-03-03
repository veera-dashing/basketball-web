import React from 'react';

class SchoolMgmtPage extends React.Component {

    render() {
        const { schoolID } = this.props.match.params;
        return (<>
            <h1> School Management</h1>
            <a href={`/schools/${schoolID}/users/`}>Users</a>
        </>
        )
    }
}

export default SchoolMgmtPage;
