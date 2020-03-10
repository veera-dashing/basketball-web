import React from 'react';

import { SchoolTeamForm } from "../components/school/SchoolTeamForm";

class SchoolTeamAddOrEditPage extends React.Component {

    render() {
        const { schoolID, teamID } = this.props.match.params;
        const title = (teamID == 0) ? 'Add School Team' : 'Edit School Team';
        return (
            <>
                <h1>{title}</h1>
                <SchoolTeamForm schoolID={schoolID} teamID={teamID} />
            </>
        )
    }
}

export default SchoolTeamAddOrEditPage;
