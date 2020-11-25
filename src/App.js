import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
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
