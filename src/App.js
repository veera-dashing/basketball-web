import React from 'react';
import { Register } from './components/login/index'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ProvideAuth } from './setup/use-auth.js';
import { Contact } from './components/contact/contact';
import { Dashboard } from './components/dashboard/dashboard';
import GitUsers from './pages/GitUsers';
import { UserIsAuthenticated } from "./setup/ProtectedRoute";
import { Root } from "./setup/Root";
import SamplePage from "./pages/SamplePage";
import { GitUserDetails } from './components/git/GitUsersDetails';
import { SchoolsPage } from './pages/SchoolsPage';
import { SchoolMgmtPage } from './pages/SchoolMgmtPage';
import { SchoolAddOrEditPage } from './pages/SchoolAddOrEditPage';
import { SchoolUserAddOrEditPage } from './pages/SchoolUserAddOrEditPage';
import { SchoolSportAddOrEditPage } from './pages/SchoolSportAddOrEditPage';
import { SchoolSportMgmtPage } from './pages/SchoolSportMgmtPage';
import { SchoolSportTeamAddOrEditPage } from './pages/SchoolSportTeamAddOrEditPage';
import { TournamentsPage } from './pages/TournamentsPage';
import { TournamentMgmtPage } from './pages/TournamentMgmtPage';
import { TournamentAddOrEditPage } from './pages/TournamentAddOrEditPage';
import { TournamentMatchAddOrEditPage } from './pages/TournamentMatchAddOrEditPage';


function App() {
    return (
        <div className="App">
            <Router>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/6">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/git/">Git Users</Link>
                    </li>
                    <li>
                        <Link to="/schools/">Schools</Link>
                    </li>
                    <li>
                        <Link to="/tournaments/">Tournaments</Link>
                    </li>
                    <li>
                        <Link to="/sample/">Sample Form</Link>
                    </li>
                </ul>
                <Switch>
                    <ProvideAuth>
                        <Route exact path="/" component={Register} />
                        <Route path="/sample" component={SamplePage} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/dashboard/:id" component={Dashboard} />
                        <Route path="/git/" exact component={GitUsers} />
                        <Route path="/git/:id" exact component={GitUserDetails} />
                        <Route exact path="/schools" render={() => <SchoolsPage />} />
                        <Route path="/schools/:schoolID/manage" render={({ match }) => <SchoolMgmtPage match={match} />} />
                        <Route path="/schools/:schoolID/addEdit" render={({ match }) => <SchoolAddOrEditPage match={match} />} />
                        <Route path="/schools/:schoolID/users/:userID/addEdit" render={({ match }) => <SchoolUserAddOrEditPage match={match} />} />
                        <Route path="/schools/:schoolID/sports/addEdit" render={({ match }) => <SchoolSportAddOrEditPage match={match} />} />
                        <Route path="/schools/:schoolID/sports/:sportID/manage" render={({ match }) => <SchoolSportMgmtPage match={match} />} />
                        <Route path="/schools/:schoolID/sports/:sportID/teams/:teamID/addEdit" render={({ match }) => <SchoolSportTeamAddOrEditPage match={match} />} />
                        <Route exact path="/tournaments" render={() => <TournamentsPage />} />
                        <Route path="/tournaments/:tournamentID/manage" render={({ match }) => <TournamentMgmtPage match={match} />} />
                        <Route path="/tournaments/:tournamentID/addEdit" render={({ match }) => <TournamentAddOrEditPage match={match} />} />
                        <Route path="/tournaments/:tournamentID/matches/:matchID/addEdit" render={({ match }) => <TournamentMatchAddOrEditPage match={match} />} />
                    </ProvideAuth>

                </Switch>
            </Router>
        </div>
    );
}

export default App;