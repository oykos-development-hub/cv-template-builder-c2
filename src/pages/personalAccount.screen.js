import React from "react";
import {Redirect} from "react-router-dom";
import '../style/personalCVdata.css';
import CVdataSubmit from "../components/CVdataSubmit";
import CVdataInput from "../components/CVdataInput";
import {StoreService} from "../services/store.service";


export default class PersonalAccountScreen extends React.Component {
    constructor(props) {
        super(props);  
        let userData = StoreService.getStoreProperty('user');

        this.state = {
          FirstName: userData.FirstName,
          LastName: userData.LastName,
          Headline: userData.Headline,
          Image: "", 
          errors : {
            FirstName: "",
            LastName: "",
            Headline: "",
            Image: "",  
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
    

      handleBlur = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({[name]: value});
        let errors = this.state.errors;
        switch (name) {
            // case 'Mobile':
            //     errors.Mobile = MobileVal.test(value) ? '' : 'Number is not valid';
            //     break; 
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
           this.setState({
            redirect: '/cvdata'
         });
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
                    <h1 className= "header">Account</h1>
                    <div className="cvd-section pa-box">

                        <h1 className="cvd-h1 pa-h1">Profile Info</h1>

                        <div className="pa-box1">

                            <form onSubmit={this.handleSubmit} noValidate>
                                <CVdataInput
                                    label="First Name"
                                    name="FirstName"
                                    text="First Name"
                                    type="text"
                                    value={this.state.FirstName}
                                    change={this.handleChange}
                                    blur={this.handleBlur}
                                    focus={this.handleFocus}
                                    error={errors.FirstName}
                                />

                                <CVdataInput
                                    label="Last Name"
                                    name="LastName"
                                    text="Last Name"
                                    type="text"
                                    value={this.state.LastName}
                                    change={this.handleChange}
                                    blur={this.handleBlur}
                                    focus={this.handleFocus}
                                    error={errors.LastName}
                                />
                            </form>
                        </div>

                        <div className="pa-box2">
                            <h2 className = "cvd-h2">Profile Image</h2>
                            <img className = "profile-image" src= "/static/media/background.369bab79.png" alt="Profile image"/> 
                            <form onSubmit={this.handleSubmit} noValidate>
                                <CVdataInput
                                    name="Image"
                                    text="Image"
                                    type="file"
                                    value={this.state.Image}
                                    change={this.handleChange}
                                    blur={this.handleBlur}
                                    focus={this.handleFocus}
                                    error={errors.Image}
                                />
                            </form>
                        </div>

                        <div className="pa-box3">
                            <form onSubmit={this.handleSubmit} noValidate>

                                <CVdataInput
                                    label="Headline / Current Title"
                                    name="Headline"
                                    text="Headline / current title"
                                    type="text"
                                    value={this.state.Headline}
                                    change={this.handleChange}
                                    blur={this.handleBlur}
                                    focus={this.handleFocus}
                                    error={errors.Headline}
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
            </div>
        );
    }
}
