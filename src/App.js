import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import LoginScreen from "./pages/login.screen";
import SignupScreen from "./pages/signup.screen";
import AccountInfo from "./pages/account.info.screen";
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
            {/* <Route path="/">
                <LoginScreen />
            </Route> */}
            <Route path="/account">
                <AccountInfo />
            </Route>
        </Switch>
    </Router>);
}

export default App;
