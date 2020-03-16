import React from 'react';

import { SchoolSportTeamForm } from "../components/school/SchoolSportTeamForm";

export const SchoolSportTeamAddOrEditPage = ({ match }) => {

    const { schoolID, sportID, teamID } = match.params;
    const title = (teamID == 0) ? 'Add School Team' : 'Edit School Team';

    return (
        <>
            <h1>{title}</h1>
            <SchoolSportTeamForm schoolID={schoolID} sportID={sportID} teamID={teamID} />
        </>
    )

}