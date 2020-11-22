import React from "react";
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
    return (<div className = "App"><Router>
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
    </Router>
    <img className = "image" src = "/images/slika.png"/>
    </div>);
}

export default App;
