import React from "react";
import {Redirect, Link} from "react-router-dom";
import Form from "../components/Form";
import background from '../images/background.png';
import {StoreService} from "../services/store.service";

export default class SignupScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const userData = StoreService.getStoreProperty('user');
        let signupHeader = 'Sign up';

        if (userData.fullName) {
            signupHeader = 'Hello, ' + userData.fullName;
        }

        return (
            <div className="signup-screen">
                {
                    !!this.state.redirect && <Redirect to={this.state.redirect}/>
                }
                <div className="left-side">
                    <div className="text-content">
                        <h1>{signupHeader}</h1>
                        <h2>Already have an account? <Link className="redirect" to="/login">Login</Link></h2>
                        <Form/>
                    </div>
                </div>
                <div className="right-side">
                    <img src={background} alt= 'background' class = 'background-image'/>
                </div>
            </div>
        );
    }
}
