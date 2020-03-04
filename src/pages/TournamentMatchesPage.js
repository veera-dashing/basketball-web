import React from 'react';

import { TournamentMatchesList } from '../components/tournament/TournamentMatchesList';

class TournamentMatchesPage extends React.Component {

    onAddTournamentMatchClick = () => {
        const { history } = this.props;
        const { tournamentID } = this.props.match.params;
        history.push(`/tournaments/${tournamentID}/matches/0/AddEdit`);
    }

    render() {
        const { tournamentID } = this.props.match.params;
        return (
            <>
                <h1> Users</h1>
                <button key='btnAddTournamentMatch' onClick={this.onAddTournamentMatchClick} >
                    Add User
                </button>
                <TournamentMatchesList tournamentID={tournamentID} />
            </>
        )
    }
}

export default TournamentMatchesPage;