import React from "react";
import {Redirect, Link} from "react-router-dom";
import InputComponent from "./inputComponent";

export default class SignupScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (

            <div className="wrapper">
                {
                    !!this.state.redirect && <Redirect to={this.state.redirect}/>
                }
                <div className="left-side">
                    <div className="text-content">
                        <h1>Sign up</h1>
                        <h2>Already have an account? <Link className="redirect" to="/login">Login</Link></h2>
                        <form>
                            <InputComponent
                                name={"full-name"} 
                                text={"Full name"}
                                type={"text"}
                            />
                            <InputComponent
                                name={"email"} 
                                text={"Email"}
                                type={"email"}
                            />
                            <InputComponent
                                name={"password"} 
                                text={"Password"}
                                type={"password"}
                            />
                            <InputComponent
                                name={"rep-password"} 
                                text={"Repeat password"}
                                type={"password"}
                            />
                            <InputComponent
                                name={"submit"}
                                type={"submit"}
                                value={"Sign up"}
                            />
                        </form>     
                    </div>
                </div>
                <div className="right-side">
                </div>
            </div>
        );
    }
}
