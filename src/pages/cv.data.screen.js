import React, {useEffect, useState} from "react";
import {Redirect,Link} from "react-router-dom";
import InputField from '../components/inputField';
import Button from '../components/button';
import {StoreService} from "../services/store.service";
import DatePicker from "react-datepicker";



function CVDataScreen() {

    const [redirect, setRedirect] = useState('');
    const [userData, setUserData] = useState(StoreService.getStoreProperty('user'));
    const [startDate, setStartDate] = useState(userData.dateOfBirth ? new Date(userData.dateOfBirth) : '' );
    const [rangeStartDate, setRangeStartDate] = useState(userData.workStartDate ? new Date(userData.workStartDate) : '' );
    const [rangeEndDate, setRangeEndDate] = useState(userData.workEndDate ? new Date(userData.workEndDate) : '' );


    useEffect(
        () => handleChange('dateOfBirth', startDate), [startDate]
      )
    useEffect(
        () => handleChange('workStartDate', rangeStartDate), [rangeStartDate]
    )
    useEffect(
        () => handleChange('workEndDate', rangeEndDate), [rangeEndDate]
    )    

    const handleChange = (name, value) => {
        let cachedUserData = StoreService.getStoreProperty('user');
        //if input is a date, convert it to string
        cachedUserData[name] = typeof value === 'object' ? value.toISOString() : value
        StoreService.updateStoreProperty('user', cachedUserData);
        setUserData(cachedUserData);
    };

    const submitForm = (e) => {
        e.preventDefault();
        showMessage();
        console.log('Submitted.')
    }

    const showMessage = () => {
        const message = document.getElementById('message');
      if(message.style.visibility = 'hidden') {
        message.style.visibility = 'visible';
        setTimeout(() => {
        message.style.visibility = 'hidden';
        }, 3000);
      }
    }

    return (<div className="cv-data-screen">
        {
            redirect !== '' && <Redirect to={redirect}/>
        }

        <div className='left-side'>
            <div className="text-content">
            <h1>Contact info</h1>

            <form onSubmit={submitForm} className="form">
                <InputField
                    name="tel"
                    type="tel"
                    value={userData.tel}
                    label="Telephone number"
                    placeholder="Telephone number"
                    onChange={handleChange}
                />
                <InputField
                    name="address"
                    type="text"
                    value={userData.address}
                    label="Address"
                    placeholder="Address"
                    onChange={handleChange}
                />
                <p className='label'>Date of birth</p>
                <DatePicker
                    placeholderText="Date of birth"
                    label="Date of birth"
                    dateFormat="dd/MM/yyyy"
                    name='dateOfBirth'
                    type='date'
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    showPopperArrow={false}
                    closeOnScroll={true}
                />
                <p className="error"> </p>
                <InputField
                    name="fbURL"
                    type="text"
                    value={userData.fbURL}
                    label="Facebook URL"
                    placeholder="Facebook URL"
                    onChange={handleChange}
                />
                <InputField
                    name="instagramURL"
                    type="text"
                    value={userData.instagramURL}
                    label="Instagram URL"
                    placeholder="Instagram URL"
                    onChange={handleChange}
                />
                <InputField
                    name="githubURL"
                    type="text"
                    value={userData.githubURL}
                    label="Github URL"
                    placeholder="Github URL"
                    onChange={handleChange}
                />
                <InputField
                    name="linkedinURL"
                    type="text"
                    value={userData.linkedinURL}
                    label="Linkedin URL"
                    placeholder="Linkedin URL"
                    onChange={handleChange}
                />
                <InputField
                    name="skypeURL"
                    type="text"
                    value={userData.skypeURL}
                    label="Skype ID"
                    placeholder="Skype ID"
                    onChange={handleChange}
                />
                <InputField
                    name="twitterURL"
                    type="text"
                    value={userData.twitterURL}
                    label="Twitter URL"
                    placeholder="Twitter URL"
                    onChange={handleChange}
                />
                <div className="experience-div">
                    <h2>Work experience</h2>
                    <InputField
                    name="company"
                    type="text"
                    value={userData.company}
                    label="Company"
                    placeholder="Company"
                    onChange={handleChange}
                    />
                    <InputField
                    name="jobTitle"
                    type="text"
                    value={userData.jobTitle}
                    label="Job Title"
                    placeholder="Job Title"
                    onChange={handleChange}
                    />
                    <InputField
                    name="jobDescription"
                    type="text"
                    value={userData.jobDescription}
                    label="Job Description"
                    placeholder="Job Description"
                    onChange={handleChange}
                    />
                    <p className='label'>Work start</p>
                    <DatePicker
                    placeholderText="Work start"
                    label="Work start"
                    dateFormat="MM/yyyy"
                    name='workStartDate'
                    type='date'
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    selected={rangeStartDate}
                    onChange={date => setRangeStartDate(date)}
                    showPopperArrow={false}
                    closeOnScroll={true}
                    />
                    <p className='label'>Work end</p>    
                    <DatePicker
                    placeholderText="Work end"
                    label="Work end"
                    dateFormat="MM/yyyy"
                    name='workEndDate'
                    type='date'
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    selected={rangeEndDate}
                    onChange={date => setRangeEndDate(date)}
                    showPopperArrow={false}
                    closeOnScroll={true}
                    />
                </div>
                <div className="buttonMessageContainer">
                    <Button
                        content="Save"
                    />
                    <p id='message' className='action-message'>Changes saved successfully!</p>
                </div>
                </form>
                
            </div>
        </div>
    </div>);
}

export default CVDataScreen;
