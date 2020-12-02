import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import LogInScreen from "./pages/LoginScreen/LogInScreen";
import SignUpScreen from "./pages/SignUpScreen/SignUpScreen";

function App() {
    return (<Router>
        <Switch>
            <Route path="/signup">
                <SignUpScreen />
            </Route>
            <Route path="/login">
                <LogInScreen />
            </Route>
            <Route path="/">
                <LogInScreen />
            </Route>
        </Switch>
    </Router>);
}

export default App;
