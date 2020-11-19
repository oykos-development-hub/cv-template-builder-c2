import React from "react";
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import LoginScreen from "./login.screen";
import SignupScreen from "./signup.screen";

function App() {
    return (<Router>
        <Switch>
            <Route path="/signup">
                <SignupScreen />
            </Route>
            <Route path="/login">
                <LoginScreen />
            </Route>
            <Route path="/">
                <LoginScreen />
            </Route>
        </Switch>
    </Router>);
}

export default App;
