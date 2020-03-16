import React from 'react';

import { TournamentInfoForm } from "../components/tournament/TournamentInfoForm";

export const TournamentAddOrEditPage = ({ match }) => {

    const { tournamentID } = match.params;
    const title = (tournamentID == 0) ? 'Add Tournament' : 'Edit Tournament';

    return (
        <>
            <h1>{title}</h1>
            <TournamentInfoForm id={tournamentID} />
        </>
    )
}