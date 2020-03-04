import React from 'react';

import { TournamentsList } from '../components/tournament/TournamentsList';

class TournamentsPage extends React.Component {

    onAddTournamentClick = () => {
        const { history } = this.props;
        history.push(`/tournaments/0/AddEdit`);
    }

    render() {
        return (
            <>
                <h1> Tournaments</h1>
                <button key='btnAddTournament' onClick={this.onAddTournamentClick} >
                    Add Tournament
                </button>
                <TournamentsList />
            </>
        )
    }
}

export default TournamentsPage;