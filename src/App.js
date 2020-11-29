import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import LoginScreen from "./pages/login.screen";
import SignupScreen from "./pages/signup.screen";
import './style/login.signup.screen.css';

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
