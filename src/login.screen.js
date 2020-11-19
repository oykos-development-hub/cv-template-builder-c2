import React from "react";
import {Redirect, Link} from "react-router-dom";

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (<div>
            {
                !!this.state.redirect && <Redirect to={this.state.redirect}/>
            }

            <h1>LOGIN SCREEN</h1>

            <div
                onClick={() => {
                    this.setState({
                       redirect: '/signup'
                    });
                }}
            >
                GO TO SIGNUP
            </div>

            <Link to="/signup">Link to Signup</Link>
        </div>);
    }
}
