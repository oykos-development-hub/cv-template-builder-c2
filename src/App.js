import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import LoginScreen from "./pages/login.screen";
import SignupScreen from "./pages/signup.screen";
import PersonalInfo from "./pages/PersonalInfo";
import {StoreService} from "./services/store.service";
import './style/login.signup.screen.css';

StoreService.initialize();

function App() {
    return (<Router>
        <Switch>
            <Route path="/signup">
                <SignupScreen />
            </Route>
            <Route path="/login">
                <LoginScreen />
            </Route>
            <Route path="/personalinfo">
                <PersonalInfo />
            </Route>
            <Route path="/">
                <PersonalInfo/>
            </Route>
        </Switch>
    </Router>);
}

export default App;
