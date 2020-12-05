import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import LoginScreen from "./pages/login.screen";
import SignupScreen from "./pages/signup.screen";
import './style/login.signup.screen.css';
import {StoreService} from "./services/store.service";
import {ApiService} from "./services/api.service";

StoreService.initialize();

ApiService.endpoints.validateToken().then((response) => {
    if (response && response.errorMessage && response.info) {
        alert('There was a problem Logging you into our application. Please try again!');
    }
    if (response && response.successMessage) {
        let newData = response.user ? response.user : null;

        if (newData) {
            newData.fullName = newData.name;

            StoreService.updateStoreProperty('user', newData);

            alert('Successfully Logged In. Enjoy our application!');
        } else {
            alert('There was a problem Logging you into our application. Please try again!');
        }
    } else {
        alert('There was a problem Logging you into our application. Please try again!');
    }
});

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
