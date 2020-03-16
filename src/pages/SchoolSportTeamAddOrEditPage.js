import React from 'react';

import { SchoolSportTeamForm } from "../components/school/SchoolSportTeamForm";

class SchoolSportTeamAddOrEditPage extends React.Component {

    render() {
        const { schoolID, sportID, teamID } = this.props.match.params;
        const title = (teamID == 0) ? 'Add School Team' : 'Edit School Team';
        return (
            <>
                <h1>{title}</h1>
                <SchoolSportTeamForm schoolID={schoolID} sportID={sportID} teamID={teamID} />
            </>
        )
    }
}

export default SchoolSportTeamAddOrEditPage;
