import React from 'react';
import {Register} from './components/login/index'
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import {ProvideAuth} from "./setup/use-auth.js";
import {Contact} from "./components/contact/contact";
import {Dashboard} from "./components/dashboard/dashboard";
import GitUsers from "./pages/GitUsers";
import {UserIsAuthenticated} from "./setup/ProtectedRoute";
import {Root} from "./setup/Root";
import SchoolPage from "./pages/SchoolPage";
import SamplePage from "./pages/SamplePage";

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
                        <Route exact path="/" component={Register}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/dashboard/:id" component={Dashboard}/>
                        <Route path="/git/" component={GitUsers}/>
                        <Route path="/schools" component={SchoolPage} />
                        <Route path="/sample" component={SamplePage} />
                    </ProvideAuth>

                </Switch>
            </Router>
        </div>
    );
}

export default App;
