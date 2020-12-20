import React from "react";
import {StoreService} from "../services/store.service";
import '../style/ngCVtemplate.css';
import '../style/mv_template.css';
import email from '../images/email.png';
import phone from '../images/phone.png';
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
export default class NGTemplate extends React.Component{
    constructor(props) {
        super(props);

        let userData = this.props.data ? this.props.data :
            StoreService.getStoreProperty('user');

        this.state = {
            fullName: userData && userData.fullName ? userData.fullName : '[Name]',
            email: userData && userData.email ? userData.email : '[email]',
            address: userData && userData.cv_data && userData.cv_data.address ? userData.cv_data.address : '[address]',
            tel: userData && userData.cv_data && userData.cv_data.tel ? userData.cv_data.tel : '[tel]',
            linkedin: userData && userData.cv_data && userData.cv_data.linkedinURL ? userData.cv_data.linkedinURL : '',
            fb: userData && userData.cv_data && userData.cv_data.fbURL ? userData.cv_data.fbURL : '',
            twitter: userData && userData.cv_data && userData.cv_data.twitterURL ? userData.cv_data.twitterURL : '',
            github: userData && userData.cv_data && userData.cv_data.githubURL ? userData.cv_data.githubURL : '',
            ig: userData && userData.cv_data && userData.cv_data.instagramURL ? userData.cv_data.instagramURL : '',
            skype: userData && userData.cv_data && userData.cv_data.skypeURL ? userData.cv_data.skypeURL : '',
            experience: userData && userData.cv_data && userData.cv_data.experience ? userData.cv_data.experience : '',
            education: userData && userData.cv_data && userData.cv_data.education ? userData.cv_data.education : '',
        };
    }
    getDate = (oldDate) => {
        let dateParts = oldDate.split("/");
        let dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
        let startDate = dateObject;
        let startMonth = startDate.getMonth() + 1;
        let startYear = startDate.getFullYear();
        let newDate = startMonth + '/' + startYear;
        return newDate;
    };
    renderExperience = (workExperience) => {

        return [
            <div className="expertise">
                <div className="col-3">
                    <span className = "fontsize">Work Experiance</span>
                    <div className= "padding-1">
                        {!!workExperience.workStartDate && this.getDate(workExperience.workStartDate)}
                        -
                        {!!workExperience.workEndDate && this.getDate(workExperience.workEndDate)}
                    </div>
                </div>
                <div className="col-4">
                    <div className="row-3">
                        {!!workExperience.jobTitle && workExperience.jobTitle}
                    </div>
                    <div className="row-3">
                        {!!workExperience.company && workExperience.company}
                    </div>
                    <div className="row-3">
                        {!!workExperience.jobDescription && workExperience.jobDescription}
                    </div>
                </div>
            </div>
        ]
    }

    renderEducation = (degree) => {
        
        return [
            <div className= "education">
                    <div className= "col">
                        <span className = "white fontsize">Education</span>
                        <div className = "padding-1">
                        {!!degree.educationStartDate && this.getDate(degree.educationStartDate)} 
                        -
                        {!!degree.educationEndDate && this.getDate(degree.educationEndDate)}
                        </div>
                    </div>
                    <div className = "col-2 ">
                       <div className="row-2">
                           {!!degree.degree && degree.degree}
                        </div>
                        <div className="row-2">
                           {!!degree.school && degree.school}
                        </div>
                        <div className="row-2">
                           {!!degree.educationDescription && degree.educationDescription}
                         </div>
                    </div>
            </div>
        ]
    }

    render(){
        const{experience} = this.state;
        const{education} = this.state;
        return(
        <div className = "bodi">
        <div id="wrapper">
            <div className="profile">
                <div className = "column-1">
                    <img className = "image" src = "" alt =""/>
                </div>
                <div className="column-2">
                    <h1 className = "margin-profile">Profile</h1>
                    <ul>
                       <li>
                           <h3 className = "no-margin">Adress:</h3> 
                           <h5 className = "no-margin text-decoration fontsize">{this.state.address}</h5>
                        </li>   
                        <li>
                           <h3 className = "no-margin ">Date of birth:</h3> 
                           <h5 className = "no-margin text-decoration fontsize">22.12.1998.</h5>
                        </li>   
                    </ul>   
                </div>
            </div>
            <div className="names">
                <div className="job">
                    <span id = "job-name "className = "jobName">
                        Web Devloper
                    </span>
                </div>
                <div id = "full-name"className="name">
                    <h1 id = "name" className = "fullname">{this.state.fullName}</h1>
                </div>
            </div>
            <div className="wraperrow">
                <div className="col-1">
                    <div className="contact">
                        <p className = "title fontsize no-margin">Contact</p>
                        <div className="row">
                            <img className = "phone-icon"src = {phone}/>
                            <span className = "padding">{this.state.tel}</span>
                        </div>
                        <div className="row">
                            <img className = "phone-icon"src = {email}/>
                            <span className = "padding">{this.state.email}</span>
                        </div>
                        <div className="row">
                            <img className = "phone-icon"src = {facebook}/>
                            <span className = "padding">
                            {!!this.state.fb && this.state.fb !== "" ? 
                                <div className="mv-info-item">{this.state.fb}</div> : ""}
                            </span>
                        <div/>     
                        </div>
                        <div className = "row">
                            <img className = "phone-icon" src = {instagram}/>
                            <span className = "padding">
                            {!!this.state.ig && this.state.ig !== "" ? 
                                <div className="mv-info-item">{this.state.ig} </div> : ""}
                            </span>
                        </div>   
                    </div>
                    <div className = "education">
                        {!!education && education !== '' && education.map((degree) => this.renderEducation(degree))}
                    </div>
                    <div className = "expertise">

                        {!!experience && experience !== '' && experience.map((workExperience) => this.renderExperience(workExperience))}
                    </div>
                </div>
            </div>
        </div>
        </div>);    
    }
}