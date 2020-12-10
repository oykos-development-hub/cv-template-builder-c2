import React, {useEffect, useState} from "react";
import {Redirect, Link} from "react-router-dom";
import InputField from '../components/inputField';
import Button from '../components/button';
import {StoreService} from "../services/store.service";
import DatePicker from "react-datepicker";
import TopHeader from "../components/topHeader";

function CVDataScreen() {
    const getWorkExperienceEmptyState = () => {
        const date = new Date();
        let dateString = date.getUTCDate() + '/' + date.getUTCMonth() + '/' + date.getUTCFullYear();

        return {
            company: "",
            jobTitle: "",
            jobDescription: "",
            workStartDate: dateString,
            workEndDate: dateString
        };
    };
    const [redirect, setRedirect] = useState('');
    const [forceRefresh, setForceRefresh] = useState(false);
    const [workExperiences, setWorkExperiences] = useState([
        getWorkExperienceEmptyState()
    ]);
    const [userData, setUserData] = useState(StoreService.getStoreProperty('user'));
    const [startDate, setStartDate] = useState(userData.dateOfBirth ? new Date(userData.dateOfBirth) : '');

    useEffect(
        () => handleChange('dateOfBirth', startDate), [startDate]
    );

    const handleExperienceChange = (name, value, index) => {
        let currentWorkExperience = workExperiences[index];

        currentWorkExperience[name] = value;

        workExperiences[index] = currentWorkExperience;

        setWorkExperiences(workExperiences);
        setForceRefresh(!forceRefresh);
    };
    const handleChange = (name, value) => {
        let cachedUserData = StoreService.getStoreProperty('user');
        //if input is a date, convert it to string
        cachedUserData[name] = typeof value === 'object' ? value.toISOString() : value;

        setUserData(cachedUserData);
    };
    const submitForm = (e) => {
        e.preventDefault();
        showMessage();
        console.log('Submitted.')
    }
    const showMessage = () => {
        const message = document.getElementById('message');
        if (message.style.visibility = 'hidden') {
            message.style.visibility = 'visible';
            setTimeout(() => {
                message.style.visibility = 'hidden';
            }, 3000);
        }
    }
    const renderWorkExperienceElements = (workExperience, index) => {
        return [
            <InputField
                name="company"
                type="text"
                value={workExperience.company}
                label="Company"
                placeholder="Company"
                onChange={(name, value) => {
                    handleExperienceChange(name, value, index);
                }}
            />,
            <InputField
                name="jobTitle"
                type="text"
                value={workExperience.jobTitle}
                label="Job Title"
                placeholder="Job Title"
                onChange={(name, value) => {
                    handleExperienceChange(name, value, index);
                }}
            />,
            <InputField
                name="jobDescription"
                type="text"
                value={workExperience.jobDescription}
                label="Job Description"
                placeholder="Job Description"
                onChange={(name, value) => {
                    handleExperienceChange(name, value, index);
                }}
            />,
            <p className='label'>Work start</p>,
            <DatePicker
                placeholderText="Work start"
                label="Work start"
                dateFormat="MM/yyyy"
                name='workStartDate'
                type='date'
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                selected={new Date(workExperience.workStartDate)}
                onChange={(date) => {
                    let dateString = date.getUTCDate() + '/' + date.getUTCMonth() + '/' + date.getUTCFullYear();

                    handleExperienceChange('workStartDate', dateString, index);
                }}
                showPopperArrow={false}
                closeOnScroll={true}
            />,
            <p className='label'>Work end</p>,
            <DatePicker
                placeholderText="Work end"
                label="Work end"
                dateFormat="MM/yyyy"
                name='workEndDate'
                type='date'
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"

                selected={new Date(workExperience.workEndDate)}
                onChange={(date) => {
                    let dateString = date.getUTCDate() + '/' + date.getUTCMonth() + '/' + date.getUTCFullYear();

                    handleExperienceChange('workEndDate', dateString, index);
                }}
                showPopperArrow={false}
                closeOnScroll={true}
            />
        ];
    };

    return (<div className="cv-data-screen column">
        <TopHeader />

        {
            redirect !== '' && <Redirect to={redirect}/>
        }

        <div className='left-side'>
            <div className="text-content">
                <h1>Contact info</h1>

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
                <p className="error"></p>
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
                    <h2 className="flex justify-between align-center margin-t-50">
                        <span>Work experience</span>

                        <Button
                            content="Add new"
                            onclick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();

                                const lastItemInArray = workExperiences[workExperiences.length - 1];

                                if (
                                    lastItemInArray && lastItemInArray.company &&
                                    lastItemInArray.jobTitle && lastItemInArray.jobDescription
                                ) {
                                    let newWorkExperiences = workExperiences;

                                    newWorkExperiences.push(getWorkExperienceEmptyState());

                                    setWorkExperiences(newWorkExperiences);
                                    setForceRefresh(!forceRefresh);
                                } else {
                                    alert('Please fill your previous work experience before adding new one!');
                                }
                            }}
                        />
                    </h2>

                    {
                        !!workExperiences && !!workExperiences.length && workExperiences.map((workExperience, index) => {
                            return (<div className="margin-v-15" style={{
                                borderBottom: '1px solid #e3e3e3',
                                paddingBottom: '15px',
                                position: 'relative',
                                paddingTop: "30px"
                            }}>
                                {renderWorkExperienceElements(workExperience, index)}

                                <div
                                    className="flex align-center justify-center"
                                    style={{
                                        position: 'absolute',
                                        top: '5px',
                                        right: '5px',
                                        width: '35px',
                                        height: '35px',
                                        borderRadius: '50%',
                                        cursor: 'pointer',
                                        backgroundColor: 'red',
                                        fontSize: '30px',
                                        color: "white",
                                        fontWeight: 'bold'
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        e.preventDefault();

                                        workExperiences.splice(index, 1);

                                        setWorkExperiences(workExperiences);
                                        setForceRefresh(!forceRefresh);
                                    }}
                                >
                                    X
                                </div>
                            </div>);
                        })
                    }
                </div>

                <div className="buttonMessageContainer">
                    <Button
                        content="Save"
                        onclick={() => {
                            console.log(workExperiences);
                        }}
                    />
                    <p id='message' className='action-message'>Changes saved successfully!</p>
                </div>
            </div>
        </div>
    </div>);
}

export default CVDataScreen;
