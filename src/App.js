import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { ConnectedRouter as Router } from 'connected-react-router';

import loginForm from "./comps/loginForm";
//// import "./App.css";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <Router history={history}> */}
                <BrowserRouter>
                    <div className="main-container">
                        <span className="content-container">
                            <Switch>
                                <Route
                                    path="/login"
                                    exact
                                    component={loginForm}
                                />
                                {/* <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} /> */}
                                {/* <Route path={path.SYSTEM} component={userIsAuthenticated(System)} /> */}
                            </Switch>
                        </span>
                    </div>
                </BrowserRouter>

                {/* </Router> */}
            </React.Fragment>
        );
    }
}

export default App;
