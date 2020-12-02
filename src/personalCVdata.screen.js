import React from "react";
import {Redirect, Link} from "react-router-dom";
import './style/personalCVdata.css';
import DatePickerComponent from "./components/DatePickerComponent";
import CVdataSubmit from "./components/CVdataSubmit";
import CVdataInput from "./components/CVdataInput";

export default class CVdataScreen extends React.Component {
    constructor(props) {
        super(props);  
        this.state = {
          Mobile: "",
          Address: "",
          City: "",
          Country: "",  
          DOB: "", 
          JobPosition: "", 
          Company: "",
          StartingDate: "", 
          Description: "",  
          Facebook: "", 
          Instagram: "", 
          LinkedIn: "", 
          errors : {
            Mobile: "",
            Address: "",
            City: "",
            Country: "",  
            DOB: "", 
            JobPosition: "", 
            Company: "",
            StartingDate: "", 
            Description: "",  
            Facebook: "", 
            Instagram: "", 
            LinkedIn: "", 
          } 
        }
      }
      
      handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({[name]: value});
      }
    
      handleDateChange(value) {
        this.setState({DOB: value});
      }

      handleStartDateChange(value) {
        this.setState({StartingDate: value});
      }

      handleBlur = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({[name]: value});
        let errors = this.state.errors;
        switch (name) {
        //   case 'fullName':
        //     errors.fullName = value.length < 1 ? 'Full name must be filled in': '';
        //     break;
        //   case 'password':
        //     errors.password = value.length < 1 ? 'Password must be filled in': '';
        //     break;
        //   case 'repPassword':
        //     errors.repPassword = value !== this.state.password ? 'Passwords do not match ': '';
        //     break;
          default:
            errors.[name] = value.length < 1 ? 'Field must be filled in': '';
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
        }else{
           alert("Please fill inputs")
        }
      }  

    render() {
        const {errors} = this.state 

        return (

            <div className="cvd-wrapper">
                {
                    !!this.state.redirect && <Redirect to={this.state.redirect}/>
                }
                <div className="cvd-content">
                    <div className="cvd-section cvd-contact">
                        <h1 className="cvd-h1">Contact Info</h1>
                        <form onSubmit={this.handleSubmit} noValidate>
                            <CVdataInput
                                label="Mobile"
                                name="Mobile"
                                text="Mobile"
                                type="tel"
                                value={this.state.Mobile}
                                change={this.handleChange}
                                blur={this.handleBlur}
                                error={errors.Mobile}
                            />

                            <CVdataInput
                                label="Address"
                                name="Address"
                                text="Street and Number"
                                type="text"
                                value={this.state.Address}
                                change={this.handleChange}
                                blur={this.handleBlur}
                                error={errors.Address}
                            />

                            <CVdataInput
                                label="City"
                                name="City"
                                text="City"
                                type="text"
                                value={this.state.City}
                                change={this.handleChange}
                                blur={this.handleBlur}
                                error={errors.City}
                            />

                            <CVdataInput
                                label="Country"
                                name="Country"
                                text="Country"
                                type="text"
                                value={this.state.Country}
                                change={this.handleChange}
                                blur={this.handleBlur}
                                error={errors.Country}
                            />              
                            
                            <DatePickerComponent 
                                label="Date of Birth"
                                name="DOB"
                                value={this.state.DOB}
                                change={(event) => this.handleDateChange(event)}
                                selected={this.state.DOB}
                                error={errors.DOB}
                            />
                        </form>
                    </div>

                    <div className="cvd-section cvd-work">
                        <h1 className="cvd-h1">Current Position</h1>
                        <form onSubmit={this.handleSubmit} noValidate>
                            <CVdataInput
                                label="Job Title"
                                name="JobPosition"
                                text="Current Job Title"
                                type="text"
                                value={this.state.JobPosition}
                                change={this.handleChange}
                                blur={this.handleBlur}
                                error={errors.JobPosition}
                            /> 

                            <CVdataInput
                                label="Company"
                                name="Company"
                                text="Company"
                                type="text"
                                value={this.state.Company}
                                change={this.handleChange}
                                blur={this.handleBlur}
                                error={errors.Company}
                            /> 

                            <DatePickerComponent 
                                label="Starting Date"
                                name="StartingDate"
                                value={this.state.StartingDate}
                                change={(event) => this.handleStartDateChange(event)}
                                selected={this.state.StartingDate}
                                error={errors.StartingDate}
                            />

                            <CVdataInput
                                label="Description"
                                name="Description"
                                text="Description"
                                type="text"
                                value={this.state.Description}
                                change={this.handleChange}
                                blur={this.handleBlur}
                                error={errors.Description}
                            />
                        </form>
                    </div> 

                    <div className="cvd-section cvd-social">
                        <h1 className="cvd-h1">Social Networks</h1>
                        <form onSubmit={this.handleSubmit} noValidate>
                            <CVdataInput
                                label="Facebook"
                                name="Facebook"
                                text="Facebook Url"
                                type="url"
                                value={this.state.Facebook}
                                change={this.handleChange}
                                blur={this.handleBlur}
                                error={errors.Facebook}
                            />

                            <CVdataInput
                                label="Instagram"
                                name="Instagram"
                                text="Instagram Url"
                                type="url"
                                value={this.state.Instagram}
                                change={this.handleChange}
                                blur={this.handleBlur}
                                error={errors.Instagram}
                            />

                            <CVdataInput
                                label="LinkedIn"
                                name="LinkedIn"
                                text="LinkendIn Url"
                                type="url"
                                value={this.state.LinkedIn}
                                change={this.handleChange}
                                blur={this.handleBlur}
                                error={errors.LinkedIn}
                            />
                            
                        </form>
                    </div>  
                </div>
                
                
                
            </div>
        );
    }
}
