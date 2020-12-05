import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
} from "react-router-dom";
import LoginScreen from "./pages/login.screen";
import SignupScreen from "./pages/signup.screen";
import CVDataScreen from "./pages/cv.data.screen";
import {StoreService} from "./services/store.service";
import {ApiService} from "./services/api.service";
import './style/login.signup.screen.css';
import './style/react-datepicker.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        StoreService.initialize();

        this.validateToken();
    }

    validateToken() {
        ApiService.endpoints.validateToken().then((response) => {
            if (response && response.errorMessage && response.info) {
                alert('There was a problem Logging you into our application. Please try again!');
            }
            if (response && response.successMessage) {
                let newData = response.user ? response.user : null;

                if (newData) {
                    newData.fullName = newData.name;

                    StoreService.updateStoreProperty('user', newData);

                    this.setState({
                        redirect: '/cv-data'
                    });

                    //alert('Successfully Logged In. Enjoy our application!');
                } else {
                    alert('There was a problem Logging you into our application. Please try again!');
                }
            } else {
                alert('There was a problem Logging you into our application. Please try again!');
            }
        });
    }

    render() {
        return (<Router>
            {
                !!this.state.redirect && <Redirect to={this.state.redirect}/>
            }

            <Switch>
                <Route path="/signup">
                    <SignupScreen/>
                </Route>
                <Route path="/login">
                    <LoginScreen/>
                </Route>
                <Route path="/cv-data">
                    <CVDataScreen/>
                </Route>
                <Route path="/">
                    <LoginScreen/>
                </Route>
            </Switch>
        </Router>);
    }
}
