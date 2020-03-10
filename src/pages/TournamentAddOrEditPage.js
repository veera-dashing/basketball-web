import React from 'react';
import { TournamentInfoForm } from "../components/tournament/TournamentInfoForm";

class TournamentAddOrEditPage extends React.Component {

    render() {
        const { tournamentID } = this.props.match.params;
        const title = (tournamentID == 0) ? 'Add School' : 'Edit School';
        return (
            <>
                <h1>{title}</h1>
                <TournamentInfoForm id={tournamentID} />
            </>
        )
    }
}

export default TournamentAddOrEditPage;
