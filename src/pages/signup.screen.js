import React from "react";
import {Redirect, Link} from "react-router-dom";
import Form from "../components/Form";
import background from '../images/background.png';

export default class SignupScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="signup-screen">
                {
                    !!this.state.redirect && <Redirect to={this.state.redirect}/>
                }
                <div className="left-side">
                    <div className="text-content">
                        <h1>Sign up</h1>
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
