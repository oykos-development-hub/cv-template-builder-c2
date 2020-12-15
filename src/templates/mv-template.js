import React from "react";
import {StoreService} from "../services/store.service";
import '../style/mv_template.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
export default class MVTemplate extends React.Component {
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
            <div className="mv-item">
                <div className="mv-dates">
                    <div className="mv-date mv-start">
                        {!!workExperience.workStartDate && this.getDate(workExperience.workStartDate)}
                    </div>
                    <div className="mv-slash">
                        -
                    </div>
                    <div className="mv-date mv-end">
                        {!!workExperience.workEndDate && this.getDate(workExperience.workEndDate)}
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
        
        return [
            <div className="mv-item">
                <div className="mv-dates">
                    <div className="mv-start">
                        {!!degree.educationStartDate && this.getDate(degree.educationStartDate)}
                    </div>
                    <div className="mv-slash">
                        -
                    </div>
                    <div className="mv-end">
                        {!!degree.educationEndDate && this.getDate(degree.educationEndDate)}
                    </div>
                </div>
                <div className="mv-section-data">
                    <div className="mv-item-title">
                        {!!degree.degree && degree.degree}
                    </div>
                    <div className="mv-item-subtitle">
                        {!!degree.school && degree.school}
                    </div>
                    <div className="mv-item-description">
                        {!!degree.educationDescription && degree.educationDescription}
                    </div>
                </div>
            </div>
        ]
    }

    render() {
        const{experience} = this.state;
        const{education} = this.state;

        return (<div className="mv-wrapper">
                    <div className="mv-layout">
                        <div className="mv-left">
                            <div className="mv-name-box">
                                <div className="mv-name">
                                    {this.state.fullName}
                                </div>
                                <div className="mv-gradient-border">
                                </div>
                            </div>

                            <div className="mv-info">
                                <div className="mv-info-title">
                                    Contact
                                </div>

                                <div className="mv-info-item">
                                    <i className="fa fa-phone mv-i"></i> {this.state.tel}
                                </div>

                                <div className="mv-info-item">
                                    <i className="fa fa-globe mv-i"></i> {this.state.address}
                                </div>

                                <div className="mv-info-title">
                                    Social
                                </div>

                                {!!this.state.linkedin && this.state.linkedin !== "" ? 
                                    <div className="mv-info-item"><i className="fa fa-linkedin mv-i"> </i> {this.state.linkedin} </div> : ""}
                                
                                {!!this.state.fb && this.state.fb !== "" ? 
                                    <div className="mv-info-item"><i className="fa fa-facebook mv-i"> </i> {this.state.fb} </div> : ""}
                                
                                {!!this.state.github && this.state.github !== "" ? 
                                    <div className="mv-info-item"><i className="fa fa-github mv-i"> </i> {this.state.github} </div> : ""}
                                
                                {!!this.state.twitter && this.state.twitter !== "" ? 
                                    <div className="mv-info-item"><i className="fa fa-twitter mv-i"> </i> {this.state.twitter} </div> : ""}
                                
                                {!!this.state.ig && this.state.ig !== "" ? 
                                    <div className="mv-info-item"><i className="fa fa-instagram mv-i"> </i> {this.state.ig} </div> : ""}
                                
                                {!!this.state.skype && this.state.skype !== "" ? 
                                    <div className="mv-info-item"><i className="fa fa-skype mv-i"> </i> {this.state.skype} </div> : ""}
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
                </div>);
    }
}

