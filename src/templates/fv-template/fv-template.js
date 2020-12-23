import React from 'react';
import { StoreService } from '../../services/store.service';
import './fv-template.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGraduationCap,
	faBriefcase,
	faLaptopCode,
	faFileAlt,
	faTrophy,
	faLanguage,
	faPhoneAlt,
	faEnvelope,
	faMapMarkedAlt,
	faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import InformationRow from './information-row';
import ContactLanguageSocialRow from './contact-row';
import SkillsRow from './skills-row';
import CertificationRow from './certification-row';
import {
	faFacebookF,
	faGithub,
	faInstagram,
	faLinkedinIn,
	faSkype,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';

function FVTemplate() {
	const userData = StoreService.getStoreProperty('user');
	const cvData = userData.cv_data ? userData.cv_data : {};
	const userEdu = cvData.education ? cvData.education : {};
	const userExp = cvData.experience ? cvData.experience : {};
	const userAch = cvData.achievements ? cvData.achievements : {};
	const userCert = cvData.certification ? cvData.certification : {};
	const userLang = cvData.languages ? cvData.languages : {};
	const userSkill = cvData.skills ? cvData.skills : {};
	let nameArray = userData.fullName.split(' ');
	let firstName = nameArray[0];
	let lastName = nameArray[1];

	function generateEducation(data) {
		return (
			<InformationRow
				startDate={data.educationStartDate}
				endDate={data.educationEndDate}
				name={data.school}
				description={data.degree}
			/>
		);
	}

	function generateExperience(data) {
		return (
			<InformationRow
				startDate={data.workStartDate}
				endDate={data.workEndDate}
				name={data.company}
				description={data.jobTitle}
			/>
		);
	}

	function generateAchievement(data) {
		if (data.awardName !== '' && data.awardType !== '') {
			return (
				<InformationRow
					startDate={data.awardYear}
					name={data.awardName}
					description={data.awardType}
				/>
			);
		} else {
			return null;
		}
	}

	function generateCertification(data) {
		return (
			<CertificationRow
				certificate={data.certificate}
				expertise={data.expertise}
				issuedBy={data.issuedBy}
			/>
		);
	}
	function generateLanguages(data) {
		return (
			<ContactLanguageSocialRow
				language={data.languageName}
				level={data.languageLevel}
			/>
		);
	}
	function generateSkills(data) {
		return <SkillsRow name={data.skillName} percent={data.skillLevel} />;
	}
	let achievementsRow =
		!!userAch && userAch[0].awardName !== '' ? (
			<div className="flex w-100-perc row-container align-center">
				<div
					className="vertical-label"
					style={{
						backgroundColor: '#5b9fef',
					}}
				>
					Achievements
				</div>

				<div className="column padding-h-50 scroll-auto">
					{!!userAch &&
						!!userAch.length &&
						userAch.map((achievementsInstance) =>
							generateAchievement(achievementsInstance),
						)}
				</div>
				<div className="flex justify-center icon">
					<FontAwesomeIcon
						icon={faTrophy}
						size={'3x'}
						color="#5b9fef"
					/>
				</div>
			</div>
		) : null;
	return (
		<div className="fv-container">
			<div className="fv-template row">
				<div className="l-side column justify-around align-center">
					<div
						style={{
							paddingTop: '20px',
						}}
					>
						<img className="personal-photo" />
					</div>
					<div className="column align-center">
						<div
							style={{
								fontSize: '42px',
							}}
						>
							<span>{firstName} </span>
							<span className="font-bold">{lastName}</span>
						</div>
						<div>
							<span className="font-size-20">{cvData.title}</span>
						</div>
					</div>
					<div className="left-side-containers w-100-perc align-center column">
						<div className="left-side-labels w-100-perc">
							<FontAwesomeIcon icon={faAddressCard} /> Contact
						</div>
						<div className="column align-start w-100-perc padding-h-10perc margin-v-15 border-box ">
							<ContactLanguageSocialRow
								icon={faPhoneAlt}
								value={cvData.tel}
							/>
							<ContactLanguageSocialRow
								icon={faEnvelope}
								value={userData.email}
							/>
							<ContactLanguageSocialRow
								icon={faMapMarkedAlt}
								value={cvData.address}
							/>
						</div>
					</div>
					<div className="left-side-containers w-100-perc align-center column">
						<div className="left-side-labels w-100-perc">
							<FontAwesomeIcon icon={faLanguage} /> Languages
						</div>
						<div className="column align-start w-100-perc padding-h-10perc margin-v-15 border-box ">
							{!!userLang &&
								!!userLang.length &&
								userLang.map((languagesInstance) =>
									generateLanguages(languagesInstance),
								)}
						</div>
					</div>
					<div className="left-side-containers w-100-perc align-center column">
						<div className="left-side-labels w-100-perc">
							<FontAwesomeIcon icon={faUsers} /> Social
						</div>
						<div className="column align-start w-100-perc padding-h-10perc margin-v-15 border-box ">
							<ContactLanguageSocialRow
								icon={faGithub}
								value={cvData.githubURL}
								social={true}
							/>
							<ContactLanguageSocialRow
								icon={faLinkedinIn}
								value={cvData.linkedinURL}
								social={true}
							/>
							<ContactLanguageSocialRow
								icon={faFacebookF}
								value={cvData.fbURL}
								social={true}
							/>
							<ContactLanguageSocialRow
								icon={faInstagram}
								value={cvData.instagramURL}
								social={true}
							/>
							<ContactLanguageSocialRow
								icon={faTwitter}
								value={cvData.twitterURL}
								social={true}
							/>
							<ContactLanguageSocialRow
								icon={faSkype}
								value={cvData.skypeURL}
								social={true}
							/>
						</div>
					</div>
				</div>
				<div className="r-side column justify-around align-center">
					<div className="flex w-100-perc row-container align-center">
						<div
							className="vertical-label"
							style={{
								backgroundColor: '#dd751b',
							}}
						>
							Education
						</div>

						<div className="column padding-h-50 scroll-auto ">
							{!!userEdu &&
								!!userEdu.length &&
								userEdu.map((educationInstance) =>
									generateEducation(educationInstance),
								)}
						</div>
						<div className="flex justify-center icon">
							<FontAwesomeIcon
								icon={faGraduationCap}
								size={'3x'}
								color="#dd751b"
							/>
						</div>
					</div>
					<div className="flex w-100-perc row-container align-center">
						<div
							className="vertical-label"
							style={{
								backgroundColor: '#00a236',
							}}
						>
							Experience
						</div>
						<div className="column padding-h-50 scroll-auto">
							{!!userExp &&
								!!userExp.length &&
								userExp.map((experienceInstance) =>
									generateExperience(experienceInstance),
								)}
						</div>
						<div className="flex justify-center icon">
							<FontAwesomeIcon
								icon={faBriefcase}
								size={'3x'}
								color="#00a236"
							/>
						</div>
					</div>
					<div className="flex w-100-perc row-container align-center">
						<div
							className="vertical-label"
							style={{
								backgroundColor: '#d00c43',
							}}
						>
							Skills
						</div>
						<div className="padding-h-50 column justify-center scroll-auto">
							{!!userSkill &&
								!!userSkill.length &&
								userSkill.map((skillsInstance) =>
									generateSkills(skillsInstance),
								)}
						</div>
						<div className="flex justify-center icon">
							<FontAwesomeIcon
								icon={faLaptopCode}
								size={'3x'}
								color="#d00c43"
							/>
						</div>
					</div>
					<div className="flex w-100-perc row-container align-center">
						<div
							className="vertical-label"
							style={{
								backgroundColor: '#5d1591',
							}}
						>
							Certification
						</div>
						<div className="column padding-h-50 scroll-auto">
							{!!userCert &&
								!!userCert.length &&
								userCert.map((certificationInstance) =>
									generateCertification(
										certificationInstance,
									),
								)}
						</div>

						<div className="flex justify-center icon">
							<FontAwesomeIcon
								icon={faFileAlt}
								size={'3x'}
								color="#5d1591"
							/>
						</div>
					</div>
					{achievementsRow}
				</div>
			</div>
		</div>
	);
}

export default FVTemplate;
