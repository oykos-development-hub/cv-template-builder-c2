import React from "react";

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
        errors.fullName = value.length < 1 ? 'Full name must be entered': '';
        break;
      case 'email':
        errors.email = Regex.test(value)? '': 'Email is not valid!';
        break;
      case 'password':
        errors.password = value.length < 1 ? 'Password must be entered': '';
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
    Object.values(this.state.errors).forEach(
      (val) => val.length > 0 && (validity = false)
    );
    if(validity === true){
       console.log("Registering can be done");
    }else{
       alert("Please check all fields")
    }
  }  

  render() {
    const {errors} = this.state  
    return ( 
      <form onSubmit={this.handleSubmit} noValidate>
        <input 
          id="fullName" 
          name="fullName" 
          placeholder="Full name" 
          type="text"  
          onChange={this.handleChange} 
          onBlurCapture={this.handleBlur}
        />
        <p  className="error" >  <span className="holder">.</span>
          {errors.fullName.length > 0 &&  <span>{errors.fullName}</span>}
        </p>
        <input 
          id="email" 
          name="email" 
          placeholder="Email" 
          type="email"  
          onChange={this.handleChange} 
          onBlurCapture={this.handleBlur}
        />
        <p  className="error" >  <span className="holder">.</span>
          {errors.email.length > 0 &&  <span>{errors.email}</span>}
        </p>
        <input 
          id="password" 
          name="password" 
          placeholder="Password" 
          type="password"  
          onChange={this.handleChange} 
          onBlurCapture={this.handleBlur}
        />
        <p  className="error" >  <span className="holder">.</span>
          {errors.password.length > 0 &&  <span>{errors.password}</span>}
        </p>
        <input 
          id="repPassword" 
          name="repPassword" 
          placeholder="Repeat Password" 
          type="password"  
          onChange={this.handleBlur}
        />
        <p  className="error" >  <span className="holder">.</span>
          {errors.repPassword.length > 0 &&  <span>{errors.repPassword}</span>}
        </p>
        <input 
          id="submit" 
          name="submit"  
          type="submit" 
          value="Sign up" 
        />
      </form>  
    );
  }
}