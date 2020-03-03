import React from 'react';
import { Register } from './components/login/index'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ProvideAuth } from './setup/use-auth.js';
import { Contact } from './components/contact/contact';
import { Dashboard } from './components/dashboard/dashboard';
import GitUsers from './pages/GitUsers';
import { UserIsAuthenticated } from "./setup/ProtectedRoute";
import { Root } from "./setup/Root";
import SchoolsPage from './pages/SchoolsPage';
import SchoolAddOrEditPage from './pages/SchoolAddOrEditPage';
import SchoolMgmtPage from './pages/SchoolMgmtPage';
import SchoolUsersPage from './pages/SchoolUsersPage';
import SchoolUserAddOrEditPage from './pages/SchoolUserAddOrEditPage';
import SamplePage from "./pages/SamplePage";
import { GitUserDetails } from './components/git/GitUsersDetails';

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
                        <Route path="/sample" component={SamplePage} />
                    </ProvideAuth>

                </Switch>
            </Router>
        </div>
    );
}

export default App;
