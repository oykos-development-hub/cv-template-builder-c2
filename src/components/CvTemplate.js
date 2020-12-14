import React from "react";
import '../style/CvTemplateS.css';
import email from '../images/email.png';
import phone from '../images/phone.png';
import facebook from '../images/facebook.png';
export default class CvTemplate extends React.Component{
    constructor(props){
        super(props);
    }
    render()
    {
        return(
        <div className = "bodi">
        <div id="wrapper">
            <div className="profile">
                <div className="image">
                    <img  className = "image" src = "images/1.jpg" alt = ""/>
                </div>
                <div id = "references-item"className="about">
                    <h2>Profile</h2>
                    <hr className = "hr"/>
                    <p>An articulate professional who can ensure that a business is financially sound, has robust accounting processes, and delivers on its financial targets.<br/>Currenty looking for a suitable position with a reputable company.</p>
                    <h3>Address:</h3>
                    <ul > 
                    <li data-value="refences.jobTitle">
                        <b>Country : Montenegro</b>
                    </li>
                    <li data-value="adress.city">
                        <b>City: Podgroica</b>
                    </li>
                    <li data-value="adress.street">
                        <b>Street: Radula Radulovica</b>
                    </li>
                    </ul>
                    <h3>Date of birth: 22.12.1998.</h3>
                </div>
            </div>
            <div className="names">
                <div className="job">
                    <span id = "job-name "data-value = "jobTitle"className = "jobName">Zanimanje</span>
                </div>
                <div id = "full-name"className="name">
                    <h1 data-value = "firstName"id = "name" className = "padding">Ime</h1>
                    <h1 data-value = "lastName"id = "name" className = "padding">Prezime</h1>
                </div>
            </div>
            <div className="wraperrow">
                <div className="col-1">
                    <div className="contact">
                        <p className = "title fontsize">Contact</p>
                        <div className="row">
                            <img className = "phone-icon"src = {phone}/>
                            <span className = "padding">+382/69/603/406</span>
                        </div>
                        <div className="row">
                            <img className = "phone-icon"src = {email}/>
                            <span className = "padding">gluscevicnikola33@gmail.com</span>
                        </div>
                        <div className="row">
                            <img className = "phone-icon"src = {facebook}/>
                            <span className = "padding">Facebook.com/nikolagluscevic</span>
                        </div>
                    </div>
                    <div className="expertise">
                        <p className = "title fontsize">Expertise</p>
                        <div className="row">
                            <span className = "phone-icon">HTML</span>
                            <div className = "fill">
                                <div className = "fill-percent"></div>
                            </div>
                        </div>
                        <div className="row">
                            <span className = "phone-icon">CSS</span>
                            <div className = "fill">
                                <div className = "fill-percent"></div>
                            </div>
                        </div>
                        <div className="row">
                            <span className = "phone-icon">Java Script</span>
                            <div className = "fill">
                                <div className = "fill-percent2"></div>
                            </div>
                        </div>
                        <div className="row">
                            <span className = "phone-icon">React.js</span>
                            <div className = "fill">
                                <div className = "fill-percent3"></div>
                            </div>
                        </div>
                        <div className="row">
                            <span className = "phone-icon">English</span>
                            <div className = "fill">
                                <div className = "fill-percent4"></div>
                            </div>
                        </div>
                        <div className="row">
                            <span className = "phone-icon">Germany</span>
                            <div className = "fill">
                                <div className = "fill-percent5"></div>
                            </div>
                        </div>
                    </div>
                    <div className="education">
                        <p className = "title white fontsize">Education</p>
                        <div id = "education-item"className="row">
                            <span className = "phone-icon white">JUSGGŠINŽ."Marko Radevic"</span>
                            <span data-value = "education.start"className = "padding2 white">2013-2017</span>
                        </div>
                        <div className="row">
                            <span className = "phone-icon white">Civil Engineering</span>
                            <span className = "padding2 white">2017- Present</span>
                        </div>
                    </div>
                </div>
                <div className="col-2 about-2">
                    <h2>Work Experiance</h2>
                    <div className="row">
                        <h3 className = "job-title">IT Manager</h3>   
                        <span className = "padding3">
                            <b>"Crnogorski Telekom"</b>
                        </span>
                        <span className = "padding3">
                            <b>2018-2020</b>
                        </span>
                    </div>
                    <span className = "work-exp">Odjeljenje za tehnicku podrsku. Podrske za IP servise i mobilnu telefoniju, komunikaciji sa korisnicima preko Drustvenih mreza i Live chat –a</span>
                    <div className="row">
                        <h3 className = "job-title">Web Developer</h3>   
                        <span className = "padding3">
                            <b>"Respect Security"</b>
                        </span>
                        <span className = "padding3">
                            <b>2020-Present</b>
                        </span>
                    </div>
                    <span className = "work-exp">Odjeljenje za tehnicku podrsku. Organizacija posla.</span>
                    <h2 style = {{margintop: "20px"}}>References</h2>
                    <span className = "work-exp">Avaiable on request.</span>
                </div>
            </div>
        </div>
        </div>);    
    }
}