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
	faGamepad,
} from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import InformationRow from './information-row';
function FVTemplate() {
	const userData = StoreService.getStoreProperty('user');
	const userEdu = userData.cv_data.education;
	const userExp = userData.cv_data.experience;

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

	return (
		<div className="fv-container">
			<div className="fv-template row">
				<div className="l-side column justify-around align-center">
					<div className="personal-photo"></div>
					<div>{userData.fullName}</div>
					<div className="left-side-containers w-100-perc align-center column">
						<div className="left-side-labels w-100-perc">
							<FontAwesomeIcon icon={faAddressCard} /> Contact
						</div>
						<div>Contact data</div>
					</div>
					<div className="left-side-containers w-100-perc align-center column">
						<div className="left-side-labels w-100-perc">
							<FontAwesomeIcon icon={faLanguage} /> Language
						</div>
						<div>Language data</div>
					</div>
					<div className="left-side-containers w-100-perc align-center column">
						<div className="left-side-labels w-100-perc">
							<FontAwesomeIcon icon={faGamepad} /> Hobbies
						</div>
						<div>Hobbies data</div>
					</div>
				</div>
				<div className="r-side column justify-around align-center">
					<div className="row w-100-perc row-container align-center">
						<div
							className="vertical-label"
							style={{
								backgroundColor: '#dd751b',
							}}
						>
							Education
						</div>

						<div className="column padding-h-50">
							{!!userEdu &&
								!!userEdu.length &&
								userEdu.map((educationInstance) =>
									generateEducation(educationInstance)
								)}
						</div>
						<div
							className="flex justify-center"
							style={{ minWidth: '60px', marginLeft: 'auto' }}
						>
							<FontAwesomeIcon
								icon={faGraduationCap}
								size={'3x'}
								color="#dd751b"
							/>
						</div>
					</div>
					<div className="row w-100-perc row-container align-center">
						<div
							className="vertical-label"
							style={{
								backgroundColor: '#bfe843',
							}}
						>
							Experience
						</div>
						<div className="flex padding-h-50">
							{!!userExp &&
								!!userExp.length &&
								userExp.map((experienceInstance) =>
									generateExperience(experienceInstance)
								)}
						</div>
						<div
							className="flex justify-center"
							style={{ minWidth: '60px', marginLeft: 'auto' }}
						>
							<FontAwesomeIcon
								icon={faBriefcase}
								size={'3x'}
								color="#bfe843"
							/>
						</div>
					</div>
					<div className="row w-100-perc row-container align-center">
						<div
							className="vertical-label"
							style={{
								backgroundColor: '#d00c43',
							}}
						>
							Skills
						</div>
						<div className="flex padding-h-50">Skills data</div>
						<div
							className="flex justify-center"
							style={{ minWidth: '60px', marginLeft: 'auto' }}
						>
							<FontAwesomeIcon
								icon={faLaptopCode}
								size={'3x'}
								color="#d00c43"
							/>
						</div>
					</div>
					<div className="row w-100-perc row-container align-center">
						<div
							className="vertical-label"
							style={{
								backgroundColor: '#5d1591',
							}}
						>
							Certification
						</div>
						<div className="flex padding-h-50">
							Certification data
						</div>

						<div
							className="flex justify-center"
							style={{ minWidth: '60px', marginLeft: 'auto' }}
						>
							<FontAwesomeIcon
								icon={faFileAlt}
								size={'3x'}
								color="#5d1591"
							/>
						</div>
					</div>
					<div className="row w-100-perc row-container align-center">
						<div
							className="vertical-label"
							style={{
								backgroundColor: '#5b9fef',
							}}
						>
							Achievements
						</div>

						<div className="flex padding-h-50 column">
							<div className="row">
								First data
								<div className="timeline">
									<div className="line"></div>
									<div className="point"></div>
								</div>
								second data
							</div>
							<div className="row">
								First data
								<div className="timeline">
									<div className="line"></div>
									<div className="point"></div>
								</div>
								second data
							</div>
						</div>
						<div
							className="flex justify-center"
							style={{ minWidth: '60px', marginLeft: 'auto' }}
						>
							<FontAwesomeIcon
								icon={faTrophy}
								size={'3x'}
								color="#5b9fef"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FVTemplate;
