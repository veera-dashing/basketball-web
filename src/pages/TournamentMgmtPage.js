import React from 'react';

class TournamentMgmtPage extends React.Component {

    render() {
        const { tournamentID } = this.props.match.params;
        return (<>
            <h1> Tournament Management</h1>
            <a href={`/tournaments/${tournamentID}/matches/`}>Matches</a>
        </>
        )
    }
}

export default TournamentMgmtPage;
