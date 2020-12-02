import React, {useEffect, useState} from "react";
import {Redirect,Link} from "react-router-dom";
import InputField from '../components/inputField';
import Button from '../components/button';
import {StoreService} from "../services/store.service";
import DatePicker from "react-datepicker";

function CVDataScreen() {

    const [redirect, setRedirect] = useState('');
    let userData = StoreService.getStoreProperty('user');
    // const [data, setData] = React.useState({
    //     email: userData.email,
    //     password: userData.password
    // });
    const [startDate, setStartDate] = useState();
    const [rangeStartDate, setRangeStartDate] = useState();
    const [rangeEndDate, setRangeEndDate] = useState();


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

        cachedUserData[name] = value;

        StoreService.updateStoreProperty('user', cachedUserData);

        // setData(prev => ({...prev, [name]: value}));
    };

     const submitForm = (e) => {
         e.preventDefault();
         console.log('Submitted.')
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
                    placeholder="Telephone number"
                    onChange={handleChange}
                />
                <InputField
                    name="address"
                    type="text"
                    value={userData.address}
                    placeholder="Address"
                    onChange={handleChange}
                />
                <DatePicker
                    placeholderText="Date of birth"
                    dateFormat="dd/MM/yyyy"
                    name='dateOfBirth'
                    type='date'
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                />
                <p className="error"> </p>
                <InputField
                    name="fbURL"
                    type="text"
                    value={userData.fbURL}
                    placeholder="Facebook URL"
                    onChange={handleChange}
                />
                <InputField
                    name="instagramURL"
                    type="text"
                    value={userData.instagramURL}
                    placeholder="Instagram URL"
                    onChange={handleChange}
                />
                <InputField
                    name="githubURL"
                    type="text"
                    value={userData.githubURL}
                    placeholder="Github URL"
                    onChange={handleChange}
                />
                <InputField
                    name="linkedinURL"
                    type="text"
                    value={userData.linkedinURL}
                    placeholder="Linkedin URL"
                    onChange={handleChange}
                />
                <InputField
                    name="skypeURL"
                    type="text"
                    value={userData.skypeURL}
                    placeholder="Skype ID"
                    onChange={handleChange}
                />
                <InputField
                    name="twitterURL"
                    type="text"
                    value={userData.twitterURL}
                    placeholder="Twitter URL"
                    onChange={handleChange}
                />
                <div className="experience-div">
                    <p>Work experience</p>
                    <InputField
                    name="company"
                    type="text"
                    value={userData.company}
                    placeholder="Company"
                    onChange={handleChange}
                    />
                    <InputField
                    name="jobTitle"
                    type="text"
                    value={userData.jobTitle}
                    placeholder="Job Title"
                    onChange={handleChange}
                    />
                    <InputField
                    name="jobDescription"
                    type="text"
                    value={userData.jobDescription}
                    placeholder="Job Description"
                    onChange={handleChange}
                    />
                    <>
                        <DatePicker
                        placeholderText="Work start"
                        name='workStartDate'
                        selected={rangeStartDate}
                        onChange={date => setRangeStartDate(date)}
                        selectsStart
                        rangeStartDate={rangeStartDate}
                        rangeEndDate={rangeEndDate}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                        />
                        <p className='error'></p>
                        <DatePicker
                        placeholderText="Work end"
                        name='workEndDate'
                        selected={rangeEndDate}
                        onChange={date => setRangeEndDate(date)}
                        selectsEnd
                        rangeStartDate={rangeStartDate}
                        rangeEndDate={rangeEndDate}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                        />
                    </>
                </div>
                <Button
                    content="Submit"
                />
                </form>
            </div>
        </div>
    </div>);
}

export default CVDataScreen;
