import React from "react";
import {Redirect, Link} from "react-router-dom";
import './login.screen.css';
import background from './images/background.png';
import Input from  './input'

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (<div className="login-screen">
            {
                !!this.state.redirect && <Redirect to={this.state.redirect}/>
            }
            <div className = 'container'>
                <div className = 'left-side'>
                    <span id = 'login-text'> Login </span>
                    <span id = 'sign-up-text'> Need a CV builder account?&nbsp;
                    <span
                        id = 'sign-up-link'
                        onClick={() => {
                            this.setState({
                                redirect: '/signup'
                            });
                        }}
                    >
                        Sign up
                    </span>
                    </span>

                    {/* <div className = 'placeholder'> Email inputComponent placeholder</div>
                    <div className = 'placeholder'> Password inputComponent placeholder</div> */}

                    <Input />
                    <Input />
                    <button id='login-button'> Login buttonComponent placeholder </button>
                </div>
                <div className = 'right-side'>
                    <img src={background} alt="Background image" id = 'background-image'/>
                </div>
            </div>
        </div>);
    }
}
