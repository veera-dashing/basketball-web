import React from 'react';
import {Register} from './components/login/index'
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import {ProvideAuth} from "./setup/use-auth.js";
import {Contact} from "./components/contact/contact";
import {Dashboard} from "./components/dashboard/dashboard";
import GitUsers from "./pages/GitUsers";

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
                </ul>
                <Switch>


                    <ProvideAuth>
                        <Route exact path="/" component={Register}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/dashboard/:id" component={Dashboard}/>
                        <Route path="/git/" component={GitUsers}/>
                    </ProvideAuth>

                </Switch>
            </Router>
        </div>
    );
}

export default App;
