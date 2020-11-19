import React from "react";
import {Redirect} from "react-router-dom";

export default class SignupScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (<div>
            {
                !!this.state.redirect && <Redirect to={this.state.redirect}/>
            }

            <h1>SIGNUP SCREEN</h1>

            <div
                onClick={() => {
                    this.setState({
                        redirect: '/login'
                    });
                }}
            >
                GO TO LOGIN
            </div>
        </div>);
    }
}
