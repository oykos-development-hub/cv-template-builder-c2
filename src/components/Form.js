import React from "react";
import InputComponent from "./inputComponent";
import SubmitComponent from "./submitComponent";

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

export default class Form extends React.Component {
    constructor(props) {
      super(props);
        
      this.state = {
        message: {
          fullName: "AS",
          email: "",
          password: "",
          repPassword: "",  
        }
      }
     
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit = e => {
      e.preventDefault();
      this.setState.message = ({ fullName: "Bravo" });
      console.log(this.state.message.fullname)
    }
  
    render() {
        
      return (
        <form onSubmit = {(e) => { this.handleSubmit(e) }} noValidate>
          <InputComponent
              name={"fullName"} 
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
              name={"repPassword"} 
              text={"Repeat password"}
              type={"password"}
          />
          <SubmitComponent
              name={"submit"}
              type={"submit"}
              value={"Sign up"}
          />
          <div>YES {this.state.message.fullname} </div>
        </form>
      );
    }
  }