import React from "react";
import {Redirect} from "react-router-dom";
import './signup.css';
import Input from './Input.js';
import Button from './Button.js';

export default class SignupScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (<div className = "signup row">
            <div className = "column">
                {
                    !!this.state.redirect && <Redirect to={this.state.redirect}/>
                }

                <h1 className = "signuptext"> Sign Up</h1>
            <div className = "row">
                <span className = "grayText">Already have an account?</span>
                    <div className = "login"
                        onClick={() => {
                    this.setState({
                        redirect: '/login'
                    });
                    }}
                    >
                     Login
                    </div>
               
            </div>
            <Input/>
            <Button/>
            </div>
        </div>);
    }
}
