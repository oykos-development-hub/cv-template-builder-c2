import React from "react";
import {StoreService} from "../services/store.service";
import '../style/mv_template.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 



export default class MVTemplate extends React.Component {
    constructor(props) {
        super(props);
        let userData = StoreService.getStoreProperty('user');

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
    
    renderExperience = (workExperience) => {
        const getDate = (oldDate) =>{
            let startDate = new Date(oldDate);
            let startMonth = startDate.getMonth();
            let startYear = startDate.getFullYear();
            let newStartDate = startMonth + '/' + startYear;
            return newStartDate;
        }
 
        return [
            <div className="mv-item"> 
                <div className="mv-dates">
                    <div className="mv-date mv-start">
                        {!!workExperience.workStartDate && getDate(workExperience.workStartDate)}
                    </div>
                    <div className="mv-slash">
                        -
                    </div>
                    <div className="mv-date mv-end">
                        {!!workExperience.workEndDate && getDate(workExperience.workEndDate)}
                    </div>
                </div>
                <div className="mv-section-data">
                    <div className="mv-item-title">
                        {!!workExperience.jobTitle && workExperience.jobTitle}
                    </div>
                    <div className="mv-item-subtitle">
                        {!!workExperience.company && workExperience.company}
                    </div>
                    <div className="mv-item-description">
                        {!!workExperience.jobDescription && workExperience.jobDescription}
                    </div>
                </div>
            </div> 
        ]
    }

    renderEducation = (degree) => {
        const getDate = (oldDate) =>{
            let startDate = new Date(oldDate);
            let startMonth = startDate.getMonth();
            let startYear = startDate.getFullYear();
            let newStartDate = startMonth + '/' + startYear;
            return newStartDate;
        }

        return [
            <div className="mv-item">
                <div className="mv-dates">
                    <div className="mv-start">
                        {!!degree.schoolStartDate && getDate(degree.schoolStartDate)}
                    </div>
                    <div className="mv-slash">
                        -
                    </div>
                    <div className="mv-end">
                        {!!degree.schoolEndDate && getDate(degree.schoolEndDate)}
                    </div>
                </div>
                <div className="mv-section-data">
                    <div className="mv-item-title">
                        {!!degree.degreeTitle && degree.degreeTitle}
                    </div>
                    <div className="mv-item-subtitle">
                        {!!degree.school && degree.school}
                    </div>
                    <div className="mv-item-description">
                        {!!degree.degreeDescription && degree.degreeDescription}
                    </div>
                </div>
            </div>
        ]
    }


    render() {
        
        const{experience} = this.state;
        const{education} = this.state;

        return (
            <div className="mv-wrapper">
                <div className="mv-layout">
                    <div className="mv-left">
                        <div className="mv-name-box">
                            <div className="mv-name">
                                {this.state.fullName} 
                            </div>
                        </div>
                        <div className="mv-info">
                            <div className="mv-info-title">
                                Contact Info
                            </div>
                            <div className="mv-info-item">
                                <i className="fa fa-phone"></i> {this.state.tel}
                            </div>
                            <div className="mv-info-item">
                                <i className="fa fa-globe"></i> {this.state.address}
                            </div>
                            <div className="mv-info-title">
                                Social
                            </div>
                            {!!this.state.linkedin && this.state.linkedin !== "" ? <div className="mv-info-item"><i className="fa fa-linkedin"> </i> {this.state.linkedin} </div> : ""}
                            {!!this.state.fb && this.state.fb !== "" ? <div className="mv-info-item"><i className="fa fa-facebook"> </i> {this.state.fb} </div> : ""}
                            {!!this.state.github && this.state.github !== "" ? <div className="mv-info-item"><i className="fa fa-github"> </i> {this.state.github} </div> : ""}
                            {!!this.state.twitter && this.state.twitter !== "" ? <div className="mv-info-item"><i className="fa fa-twitter"> </i> {this.state.twitter} </div> : ""}
                            {!!this.state.ig && this.state.ig !== "" ? <div className="mv-info-item"><i className="fa fa-instagram"> </i> {this.state.ig} </div> : ""}
                            {!!this.state.skype && this.state.skype !== "" ? <div className="mv-info-item"><i className="fa fa-skype"> </i> {this.state.skype} </div> : ""}

                        
                        </div>
                    </div>

                    <div className="mv-right">
                        <div className="mv-section">
                            <div className="mv-section-title">
                                Work Experience
                            </div>
                            
                            {!!experience && experience !== '' && experience.map((workExperience) => this.renderExperience(workExperience))}
            
                            <div className="mv-section-title">
                                Education
                            </div>

                            {!!education && education !== '' && education.map((degree) => this.renderEducation(degree))}

                        </div>

                    </div>
            
                </div>

            </div>
            
        );
    }
}

