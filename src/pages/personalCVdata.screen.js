import React from "react";
import {Redirect} from "react-router-dom";
import '../style/personalCVdata.css';
import DatePickerComponent from "../components/DatePickerComponent";
import CVdataSubmit from "../components/CVdataSubmit";
import CVdataInput from "../components/CVdataInput";
import {StoreService} from "../services/store.service";

const MobileVal = RegExp(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/i);
const FacebookVal = RegExp(/^(https?:\/\/)?((w{3}\.)?)facebook.com\/.*/i);
const InstagramVal = RegExp(/^(https?:\/\/)?((w{3}\.)?)instagram.com\/.*/i);
const LinkedInVal = RegExp(/^(https?:\/\/)?((w{3}\.)?)linekedin.com\/.*/i);

export default class CVdataScreen extends React.Component {
    constructor(props) {
        super(props);  
        let userData = StoreService.getStoreProperty('user');

        this.state = {
          Mobile: userData.Mobile,
          Address: userData.Address,
          City: userData.City,
          Country: userData.Country, 
          DOB: userData.DOB, 
          JobPosition: userData.JobPosition, 
          Company: userData.Company,
          StartingDate: userData.StartingDate, 
          Description: userData.Description,  
          Facebook: userData.Facebook, 
          Instagram: userData.Instagram, 
          LinkedIn: userData.LinkedIn, 
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
          },  
        }
      }
      
      handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let cachedUserData = StoreService.getStoreProperty('user');
        cachedUserData[name] = value;
        StoreService.updateStoreProperty('user', cachedUserData);
        this.setState({[name]: value});
        console.log(StoreService.getStoreProperty('user'));
      }
    
      handleDateChange(value) {
        let cachedUserData = StoreService.getStoreProperty('user');
        cachedUserData.DOB = value;
        StoreService.updateStoreProperty('user', cachedUserData);
        this.setState({DOB: value}); 
      }

      handleStartDateChange(value) {
        let cachedUserData = StoreService.getStoreProperty('user');
        cachedUserData.StartingDate = value;
        StoreService.updateStoreProperty('user', cachedUserData);
        this.setState({StartingDate: value});
      }

      handleBlur = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({[name]: value});
        let errors = this.state.errors;
        switch (name) {
            case 'Mobile':
                errors.Mobile = MobileVal.test(value) ? '' : 'Number is not valid';
                break; 
            case 'Facebook':
                errors.Facebook = FacebookVal.test(value) ? '' : 'URL is not valid';
                break;
            case 'Instagram':
                errors.Instagram = InstagramVal.test(value) ? '' : 'URL is not valid';
                break;
            case 'LinkedIn':
                errors.LinkedIn = LinkedInVal.test(value) ? '' : 'URL is not valid';
                break;
            default:
                errors.[name] = value.length < 1 ? [name]  + ' must be filled in': '';
                break;
        }
        this.setState(Object.assign(this.state, { errors,[name]: value }));
      }

      handleFocus = e => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState(prevState => ({
            errors: {                   
                ...prevState.errors,    
                [name]: ""       
            }
        }));
      }
    
      handleSubmit = (e) => {
        e.preventDefault(); 

        let validity = true;

        Object.values(this.state).forEach(
          (val) => val != null ? (val.length < 1 && (validity = false))
        : (validity = false));
        Object.values(this.state.errors).forEach(
          (val) => val.length > 0 && (validity = false)
        );

        if(validity === true){
           console.log(`Data was submitted`);
        }else{
            alert("Please check that all the inputs are filled");
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
                                focus={this.handleFocus}
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
                                focus={this.handleFocus}
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
                                focus={this.handleFocus}
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
                                focus={this.handleFocus}
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
                                focus={this.handleFocus}
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
                                focus={this.handleFocus}
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
                                focus={this.handleFocus}
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
                                focus={this.handleFocus}
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
                                focus={this.handleFocus}
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
                                focus={this.handleFocus}
                                error={errors.LinkedIn}
                            />

                            <CVdataSubmit 
                                name="submit"   
                                type="submit" 
                                value="Save" 
                            />
                            
                        </form>
                    </div>  
                </div>  
            </div>
        );
    }
}
