import React from 'react';
import './Input.css';
import './Button.css';
import {ApiService} from "./services/api.service";

const emailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const formValid = ({formErrors, ...rest}) =>{
    let valid = true;
    Object.values(formErrors).forEach(val =>{
        val.length > 0 && (valid = false);
    });
    Object.values(rest).forEach(val =>{
        val === "" && (valid = false);
    });

    return valid;
};

export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email:"" ,
            password: "",
            formErrors:{
                name:"",
                email:"",
                password: "",
                passwordR:""
            }
        }
    }
    handleSubmit = e => {
        e.preventDefault();

        if (this.state.email && this.state.password) {
            return ApiService.endpoints.login(this.state.email, this.state.password).then((response) => {
                if (response && response.errorMessage && response.info) {
                    this.setState({
                        errorMessage: response.info
                    });
                }
            });
        }

        if (this.state.password !== this.state.passwordR) {
            this.setState({
                password: '',
                passwordR: ''
            });

            return alert("Passwords don't match");
        }

        let formValid = formValid(this.state);

        if (formValid){
            console.log(`
            --Submitting--
            Name: ${this.state.name}
            Email:${this.state.email}
            Password:${this.state.password}
            PasswordR:${this.state.passwordR}
            `);
        } else{
            alert("Please fill inputs")
        }
    };
    handleChange = e =>{
        e.preventDefault();

        const {name, value} = e.target;
        let formErrors = this.state.formErrors;
        switch(name){
            case 'fullname':
                formErrors.name = value.length > 0  ? "": "*required";
                break;
            case 'email':
                formErrors.email = emailRegex.test(value) && value.length > 0 ? "" : "*invalid email adress";
                break;
            case 'password':
                formErrors.password = value === this.state.passwordR ? "" : "*password don't match";
                break;
            case 'passwordR':
                formErrors.password = value === this.state.password ? "" : "*password don't match";
                break;
        }
        this.setState({
            formErrors,
            [name]: value
        }, () => console.log(this.state));

    }
    render(){
        const {formErrors} = this.state;
        return(<div className="signup-form">
            <form onSubmit = {(e) => { this.handleSubmit(e) }} noValidate>

                <input
                    className = "input"
                    name = "fullname"
                    type = "text"
                    placeholder = "Full name"
                    value={this.state.fullname}
                    onChange = {(e) => {
                        this.handleChange(e)
                    }}
                    noValidate
                />
                {formErrors.name.length > 0 && (<span className = "errorMass">{formErrors.name}</span>)}

                <input className = "input" name = "email" type = "email" placeholder = "Email" value={this.state.email} onChange = {(e) => {this.handleChange(e)}} noValidate/>
                    {formErrors.email.length > 0 && (<span className = "errorMass">{formErrors.email}</span>)}

                <input
                    className = "input"
                    name = "password"
                    type = "password"
                    placeholder = "Password"
                    value={this.state.password}
                    onChange = {(e) => {
                        this.handleChange(e)
                    }}
                    noValidate
                />
                {formErrors.password.length > 0 && (<span className = "errorMass">{formErrors.password}</span>)}

                <input className = "input" name = "passwordR"  type = "password" placeholder = "Repeat password" value = {this.state.passwordR} onChange = {(e) => {this.handleChange(e)}} noValidate/>
                <button className = "button" type = "submit">Sign up</button>

                {
                    !!this.state.errorMessage && (<div style={{color: 'red'}}>{this.state.errorMessage}</div>)
                }
            </form>
        </div>);
    }
}
