import React from 'react';
import './Input.css';
import './Button.css';
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
}
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
        if (formValid(this.state)){
            console.log(`
            --Submitting--
            Name: ${this.state.name}
            Email:${this.state.email}
            Password:${this.state.password}
            PasswordR:${this.state.passwordR}
            `);
        }else{
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
                formErrors.password = value == formErrors.passwordR.value ? "" : "*password don't match";
                break;
                default:
                break;
        }
        this.setState({formErrors, [name]: value}, () => console.log(this.state));

    }
    render(){
        const {formErrors} = this.state;
        return(<div>
            <form onSubmit = {this.handleSubmit} noValidate>
                
                <input className = "input" name = "fullname"type = "text" placeholder = "Full name" onChange = {this.handleChange} noValidate />
                    {formErrors.name.length > 0 && (<span className = "errorMass">{formErrors.name}</span>)}
                <input className = "input" name = "email" type = "email" placeholder = "Email" onChange = {this.handleChange} noValidate/>
                    {formErrors.email.length > 0 && (<span className = "errorMass">{formErrors.email}</span>)} 
                <input className = "input"  name = "password" type = "password" placeholder = "Password" value = {this.password} onChange = {this.handleChange} noValidate/>
                    {formErrors.password.length > 0 && (<span className = "errorMass">{formErrors.password}</span>)}
                <input className = "input" name = "passowrdR"  type = "password" placeholder = "Repeat password" value = {this.password} onChange = {this.handleChange} noValidate/>
                <button className = "button" type = "submit">Sign up</button>
            </form>
        </div>);
    }
}