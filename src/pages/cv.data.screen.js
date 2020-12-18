import React, { useEffect, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import InputField from '../components/inputField';
import Button from '../components/button';
import { StoreService } from '../services/store.service';
import DatePicker from 'react-datepicker';
import TopHeader from '../components/topHeader';
import { ApiService } from '../services/api.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
function CVDataScreen() {
	const iconTrash = <FontAwesomeIcon icon={faTrashAlt} size={'2x'} />;
	const convertStringToDate = (dateString) => {
		let dateParts = dateString.split('/');
		let dateObject = new Date(
			+dateParts[2],
			dateParts[1] - 1,
			+dateParts[0]
		);
		return dateObject;
	};
	const getWorkExperienceEmptyState = () => {
		const date = new Date();
		let dateString =
			('0' + date.getDate()).slice(-2) +
			'/' +
			('0' + (date.getMonth() + 1)).slice(-2) +
			'/' +
			date.getFullYear();
		return {
			company: '',
			jobTitle: '',
			jobDescription: '',
			workStartDate: dateString,
			workEndDate: dateString,
		};
	};
	const storedUserData = StoreService.getStoreProperty('user').cv_data;
	const getEducationEmptyState = () => {
		const date = new Date();
		let dateString =
			('0' + date.getDate()).slice(-2) +
			'/' +
			('0' + (date.getMonth() + 1)).slice(-2) +
			'/' +
			date.getFullYear();
		return {
			school: '',
			degree: '',
			educationDescription: '',
			educationStartDate: dateString,
			educationEndDate: dateString,
		};
	};
	const [redirect, setRedirect] = useState('');
	const [forceRefresh, setForceRefresh] = useState(false);
	const [workExperiences, setWorkExperiences] = useState(
		StoreService.getStoreProperty('user').cv_data
			? StoreService.getStoreProperty('user').cv_data.experience
				? StoreService.getStoreProperty('user').cv_data.experience
				: [getWorkExperienceEmptyState()]
			: [getWorkExperienceEmptyState()]
	);
	const [education, setEducation] = useState(
		StoreService.getStoreProperty('user').cv_data.education
			? StoreService.getStoreProperty('user').cv_data.education
			: [getEducationEmptyState()]
	);
	const [userData, setUserData] = useState(
		storedUserData ? storedUserData : {}
	);
	const [birthDate, setBirthDate] = useState(
		userData && typeof userData === 'object' && userData.dateOfBirth
			? convertStringToDate(userData.dateOfBirth)
			: new Date()
	);
	const handleExperienceChange = (name, value, index) => {
		let currentWorkExperience = workExperiences[index];

		currentWorkExperience[name] = value;

		workExperiences[index] = currentWorkExperience;

		setWorkExperiences(workExperiences);
		setForceRefresh(!forceRefresh);
	};
	const handleEducationChange = (name, value, index) => {
		let currentEducation = education[index];
		currentEducation[name] = value;
		education[index] = currentEducation;
		setEducation(education);
		setForceRefresh(!forceRefresh);
	};
	const handleChange = (name, value) => {
		let cachedUserData = userData;

		cachedUserData =
			typeof cachedUserData === 'object' ? cachedUserData : {};

		cachedUserData[name] = value;

		setUserData(cachedUserData);
	};
	const submitForm = (e) => {
		e.preventDefault();
		showMessage();
		let storedUser = StoreService.getStoreProperty('user');

		storedUser.cv_data = userData;
		storedUser.cv_data.experience =
			workExperiences &&
			(workExperiences.length > 1 ||
				workExperiences[0] !== getWorkExperienceEmptyState())
				? workExperiences
				: [];
		storedUser.cv_data.education =
			education &&
			(education.length > 1 || education[0] !== getEducationEmptyState())
				? education
				: [];

		StoreService.updateStoreProperty('user', storedUser);

		ApiService.endpoints.updateUser(storedUser, storedUser.id, false);
	};
	const showMessage = () => {
		const message = document.getElementById('message');
		if ((message.style.visibility = 'hidden')) {
			message.style.visibility = 'visible';
			setTimeout(() => {
				message.style.visibility = 'hidden';
			}, 3000);
		}
	};
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
			<p className="label">Work start</p>,
			<DatePicker
				placeholderText="Work start"
				label="Work start"
				dateFormat="MM/yyyy"
				name="workStartDate"
				type="date"
				showMonthDropdown
				showYearDropdown
				dropdownMode="select"
				selected={convertStringToDate(workExperience.workStartDate)}
				onChange={(date) => {
					if (date) {
						let dateString =
							('0' + date.getDate()).slice(-2) +
							'/' +
							('0' + (date.getMonth() + 1)).slice(-2) +
							'/' +
							date.getFullYear();
						handleExperienceChange(
							'workStartDate',
							dateString,
							index
						);
					}
				}}
				showPopperArrow={false}
				closeOnScroll={true}
			/>,
			<p className="label">Work end</p>,
			<DatePicker
				placeholderText="Work end"
				label="Work end"
				dateFormat="MM/yyyy"
				name="workEndDate"
				type="date"
				showMonthDropdown
				showYearDropdown
				dropdownMode="select"
				selected={convertStringToDate(workExperience.workEndDate)}
				onChange={(date) => {
					if (date) {
						let dateString =
							('0' + date.getDate()).slice(-2) +
							'/' +
							('0' + (date.getMonth() + 1)).slice(-2) +
							'/' +
							date.getFullYear();
						handleExperienceChange(
							'workEndDate',
							dateString,
							index
						);
					}
				}}
				showPopperArrow={false}
				closeOnScroll={true}
			/>,
		];
	};

	const renderEducationElements = (educationInstance, index) => {
		return [
			<InputField
				name="school"
				type="text"
				value={educationInstance.school}
				label="School"
				placeholder="School"
				onChange={(name, value) => {
					handleEducationChange(name, value, index);
				}}
			/>,
			<InputField
				name="degree"
				type="text"
				value={educationInstance.degree}
				label="Degree"
				placeholder="Degree"
				onChange={(name, value) => {
					handleEducationChange(name, value, index);
				}}
			/>,
			<InputField
				name="educationDescription"
				type="text"
				value={educationInstance.educationDescription}
				label="Education Description"
				placeholder="Education Description"
				onChange={(name, value) => {
					handleEducationChange(name, value, index);
				}}
			/>,
			<p className="label">Education start</p>,
			<DatePicker
				placeholderText="Education start"
				label="Education start"
				dateFormat="MM/yyyy"
				name="educationStartDate"
				type="date"
				showMonthDropdown
				showYearDropdown
				dropdownMode="select"
				selected={convertStringToDate(
					educationInstance.educationStartDate
				)}
				onChange={(date) => {
					if (date) {
						let dateString =
							('0' + date.getDate()).slice(-2) +
							'/' +
							('0' + (date.getMonth() + 1)).slice(-2) +
							'/' +
							date.getFullYear();
						handleEducationChange(
							'educationStartDate',
							dateString,
							index
						);
					}
				}}
				showPopperArrow={false}
				closeOnScroll={true}
			/>,
			<p className="label">Education end</p>,
			<DatePicker
				placeholderText="Education end"
				label="Education end"
				dateFormat="MM/yyyy"
				name="educationEndDate"
				type="date"
				showMonthDropdown
				showYearDropdown
				dropdownMode="select"
				selected={convertStringToDate(
					educationInstance.educationEndDate
				)}
				onChange={(date) => {
					if (date) {
						let dateString =
							('0' + date.getDate()).slice(-2) +
							'/' +
							('0' + (date.getMonth() + 1)).slice(-2) +
							'/' +
							date.getFullYear();
						handleEducationChange(
							'educationEndDate',
							dateString,
							index
						);
					}
				}}
				showPopperArrow={false}
				closeOnScroll={true}
			/>,
		];
	};

	return (
		<div className="cv-data-screen column">
			<TopHeader />

			{!!redirect && <Redirect to={redirect} />}

			<div className="left-side">
				<div className="text-content">
					<div className="contact-info section">
						<h1>Contact info</h1>
						<InputField
							name="tel"
							type="tel"
							value={userData.tel}
							label="Telephone number"
							placeholder="Telephone number"
							onChange={handleChange}
							pattern={'[0-9]{3}-[0-9]{3}-[0-9]{3}'}
						/>
						<InputField
							name="address"
							type="text"
							value={userData.address}
							label="Address"
							placeholder="Address"
							onChange={handleChange}
						/>
						<p className="label">Date of birth</p>
						<DatePicker
							placeholderText="Date of birth"
							label="Date of birth"
							dateFormat="dd/MM/yyyy"
							name="dateOfBirth"
							type="date"
							required
							showMonthDropdown
							showYearDropdown
							dropdownMode="select"
							selected={birthDate}
							onChange={(date) => {
								if (date) {
									let dateString =
										('0' + date.getDate()).slice(-2) +
										'/' +
										('0' + (date.getMonth() + 1)).slice(
											-2
										) +
										'/' +
										date.getFullYear();
									setBirthDate(
										convertStringToDate(dateString)
									);
									handleChange('dateOfBirth', dateString);
								}
							}}
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
					</div>
					<div className="experience-div section">
						<h2 className="flex justify-between align-center">
							<span>Work experience</span>
						</h2>

						{!!workExperiences &&
							!!workExperiences.length &&
							workExperiences.map((workExperience, index) => {
								return (
									<div
										className="margin-v-15"
										style={{
											paddingBottom: '15px',
											position: 'relative',
											paddingTop: '30px',
										}}
									>
										{renderWorkExperienceElements(
											workExperience,
											index
										)}

										<div
											className="flex align-center justify-center"
											style={{
												position: 'absolute',
												top: '5px',
												right: '5px',
												cursor: 'pointer',
											}}
											onClick={(e) => {
												e.stopPropagation();
												e.preventDefault();
												if (
													workExperiences.length != 1
												) {
													workExperiences.splice(
														index,
														1
													);
												}
												setWorkExperiences(
													workExperiences
												);
												setForceRefresh(!forceRefresh);
											}}
										>
											{iconTrash}
										</div>
									</div>
								);
							})}
						<div className="row justify-end">
							<Button
								content="Add new experience"
								onclick={(e) => {
									e.preventDefault();
									e.stopPropagation();

									const lastItemInArray =
										workExperiences[
											workExperiences.length - 1
										];

									if (
										lastItemInArray &&
										lastItemInArray.company &&
										lastItemInArray.jobTitle &&
										lastItemInArray.jobDescription
									) {
										let newWorkExperiences = workExperiences;

										newWorkExperiences.push(
											getWorkExperienceEmptyState()
										);

										setWorkExperiences(newWorkExperiences);
										setForceRefresh(!forceRefresh);
									} else {
										alert(
											'Please fill your previous work experience before adding new one!'
										);
									}
								}}
							/>
						</div>
					</div>
					<div className="education-div section">
						<h2 className="flex justify-between align-center">
							<span>Education</span>
						</h2>

						{!!education &&
							!!education.length &&
							education.map((educationInstance, index) => {
								return (
									<div
										className="margin-v-15"
										style={{
											paddingBottom: '15px',
											position: 'relative',
											paddingTop: '30px',
										}}
									>
										{renderEducationElements(
											educationInstance,
											index
										)}

										<div
											className="flex align-center justify-center"
											style={{
												position: 'absolute',
												top: '5px',
												right: '5px',
												cursor: 'pointer',
											}}
											onClick={(e) => {
												e.stopPropagation();
												e.preventDefault();
												if (education.length != 1) {
													education.splice(index, 1);
												}
												setEducation(education);
												setForceRefresh(!forceRefresh);
											}}
										>
											{iconTrash}
										</div>
									</div>
								);
							})}
						<div className="row justify-end">
							<Button
								content="Add new education"
								onclick={(e) => {
									e.preventDefault();
									e.stopPropagation();

									const lastItemInArray =
										education[education.length - 1];

									if (
										lastItemInArray &&
										lastItemInArray.school &&
										lastItemInArray.degree
									) {
										let newEducation = education;

										newEducation.push(
											getEducationEmptyState()
										);

										setEducation(newEducation);
										setForceRefresh(!forceRefresh);
									} else {
										alert(
											'Please fill your previous education before adding new one!'
										);
									}
								}}
							/>
						</div>
					</div>
					<div className="buttonMessageContainer">
						<Button
							content="Save"
							onclick={(e) => {
								submitForm(e);
							}}
						/>
						<p id="message" className="action-message">
							Changes saved successfully!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CVDataScreen;
