import React from "react";
import InputComponent from "./inputComponent";
import SubmitComponent from "./submitComponent";
import {ApiService} from "../services/api.service";

const Regex = RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i);

export default class Form extends React.Component {
  constructor(props) {
    super(props);  
    this.state = {
      fullName: "",
      email: "",
      password: "",
      repPassword: "",  
      errors : {
        fullName: "",
      email: "",
      password: "",
      repPassword: "",
      } 
    }
  }
  
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({[name]: value});
  }

  handleBlur = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({[name]: value});
    let errors = this.state.errors;
    switch (name) {
      case 'fullName':
        errors.fullName = value.length < 1 ? 'Full name must be filled in': '';
        break;
      case 'email':
        errors.email = Regex.test(value)? '': 'Email is not valid';
        break;
      case 'password':
        errors.password = value.length < 1 ? 'Password must be filled in': '';
        break;
      case 'repPassword':
        errors.repPassword = value !== this.state.password ? 'Passwords do not match ': '';
        break;
      default:
        break;
    }
    this.setState(Object.assign(this.state, { errors,[name]: value }));
  }

  handleSubmit = (e) => {
    e.preventDefault(); 

    let validity = true;
    Object.values(this.state).forEach(
      (val) => val.length < 1 && (validity = false)
    );
    Object.values(this.state.errors).forEach(
      (val) => val.length > 0 && (validity = false)
    );
    if (this.state.password !== this.state.repPassword) {
      this.setState({
          password: '',
          repPassword: ''
      });
      alert("Passwords don't match");
    }
    else if(validity === true){
       console.log(`
       --Submitting--
       Name: ${this.state.fullName}
       Email:${this.state.email}
       Password:${this.state.password}
       PasswordR:${this.state.repPassword}
       `);
      if (this.state.email && this.state.password) {
        return ApiService.endpoints.login(this.state.email, this.state.password).then((response) => {
          if (response && response.errorMessage && response.info) {
            this.setState({
              errorMessage: response.info
            });
          }
        });
      }
    }else{
       alert("Please fill inputs")
    }
  }  

  render() {
    const {errors} = this.state  
    return ( 
      <form onSubmit={this.handleSubmit} noValidate>
        <InputComponent
          name="fullName"
          text="Full name"
          type="text"
          value={this.state.fullName}
          change={this.handleChange}
          blur={this.handleBlur}
          error={errors.fullName}
        />
        <InputComponent
          name="email"
          text="Email"
          type="email"
          value={this.state.email}
          change={this.handleChange}
          blur={this.handleBlur}
          error={errors.email}
        />
        <InputComponent
          name="password"
          text="Password"
          type="password"
          value={this.state.password}
          change={this.handleChange}
          blur={this.handleBlur}
          error={errors.password}
        />
        <InputComponent
          name="repPassword"
          text="Repeat Password"
          type="password"
          value={this.state.repPassword}
          change={this.handleBlur}
          blur={this.handleBlur}
          error={errors.repPassword}
        />
        <SubmitComponent 
          name="submit"   
          type="submit" 
          value="Sign up" 
        />
      </form>  
    );
  }
}

