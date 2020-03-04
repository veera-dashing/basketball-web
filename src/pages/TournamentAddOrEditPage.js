import React from 'react';
import { TournamentForm } from "../components/tournament/TournamentForm";

class TournamentAddOrEditPage extends React.Component {

    render() {
        const { tournamentID } = this.props.match.params;
        const title = (tournamentID == 0) ? 'Add School' : 'Edit School';
        return (
            <>
                <h1>{title}</h1>
                <TournamentForm id={tournamentID} />
            </>
        )
    }
}

export default TournamentAddOrEditPage;
