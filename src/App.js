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
import SchoolsPage from './pages/SchoolsPage';
import SchoolAddOrEditPage from './pages/SchoolAddOrEditPage';
import SchoolMgmtPage from './pages/SchoolMgmtPage';
import SchoolUsersPage from './pages/SchoolUsersPage';
import SchoolUserAddOrEditPage from './pages/SchoolUserAddOrEditPage';
import TournamentsPage from './pages/TournamentsPage';
import TournamentAddOrEditPage from './pages/TournamentAddOrEditPage';
import TournamentMgmtPage from './pages/TournamentMgmtPage';
import TournamentMatchesPage from './pages/TournamentMatchesPage';
import TournamentMatchAddOrEditPage from './pages/TournamentMatchAddOrEditPage';


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
                        <Route path="/contact" component={Contact} />
                        <Route path="/dashboard/:id" component={Dashboard} />
                        <Route path="/git/" exact component={GitUsers} />
                        <Route path="/git/:id" exact component={GitUserDetails} />
                        <Route path="/schools" component={SchoolsPage} />
                        <Route path="/schools/:schoolID/AddEdit" component={SchoolAddOrEditPage} />
                        <Route path="/schools/:schoolID/manage" component={SchoolMgmtPage} />
                        <Route path="/schools/:schoolID/users/" component={SchoolUsersPage} />
                        <Route path="/schools/:schoolID/users/:userID/AddEdit" component={SchoolUserAddOrEditPage} />
                        <Route path="/tournaments" component={TournamentsPage} />
                        <Route path="/tournaments/:tournamentID/AddEdit" component={TournamentAddOrEditPage} />
                        <Route path="/tournaments/:tournamentID/manage" component={TournamentMgmtPage} />
                        <Route path="/tournaments/:tournamentID/matches/" component={TournamentMatchesPage} />
                        <Route path="/tournaments/:tournamentID/matches/:matchID/AddEdit" component={TournamentMatchAddOrEditPage} />
                        <Route path="/sample" component={SamplePage} />
                    </ProvideAuth>

                </Switch>
            </Router>
        </div>
    );
}

export default App;
