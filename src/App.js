import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import LoginScreen from "./pages/login.screen";
import SignupScreen from "./pages/signup.screen";
import CVDataScreen from "./pages/cv.data.screen";
import {StoreService} from "./services/store.service";
import './style/login.signup.screen.css';
import './style/react-datepicker.css';

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
            <Route path="/cvdatascreen">
                <CVDataScreen />
            </Route>
        </Switch>
    </Router>);
}

export default App;
