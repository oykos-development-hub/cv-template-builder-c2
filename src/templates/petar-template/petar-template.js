import React from 'react';
import BannerComponent from './components/BannerComponent';
import ContactComponent from './components/ContactComponent';
import SkillComponent from './components/SkillComponent';
import WorkAndEducationComp from './components/WorkAndEducationComp';
import MainContentHeader from './components/MainContentHeader';
import NameComponent from './components/NameComponent';
import AchieveCertsComp from './components/AchieveCertsComp';
import { StoreService } from '../../services/store.service';
import './styles/petar-template.css';
import defaultImg from './styles/default-profile-icon-16.jpg';

const PetarTemplate = () => {
	const userData = StoreService.getStoreProperty('user');
	const cv_data = userData.cv_data ? userData.cv_data : {};
	const experience = cv_data.experience ? cv_data.experience : [];
	const education = cv_data.education ? cv_data.education : [];
	const skills = cv_data.skills ? cv_data.skills : [];
	const languages = cv_data.languages ? cv_data.languages : [];
	const certification = cv_data.certification ? cv_data.certification : [];
	const achievements = cv_data.achievements ? cv_data.achievements : [];
	const image = userData.imgUrl ? userData.imgUrl : defaultImg;
	const bioText =
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, quae. In, expedita! Aut praesentium omnis fugiat iure minus eius quas rerum iste numquam perspiciatis reprehenderit aspernatur ut placeat soluta deserunt ratione, quibusdam alias ad possimus corporis. Modi qui nam, quam repellendus, quisquam iure totam molestiae, voluptate illum doloribus eius! Perspiciatis.';
	console.log(userData);

	return (
		<div className="petar-temp--wrp column">
			<div className="cv--top-row flex align-center">
				<div className="cv-avatar-wrp">
					<div
						style={{
							backgroundImage: `url(${image})`,
							backgroundSize: 'cover',
						}}
						className="cv-avatar-img"
					></div>
				</div>
				<section className="cv-header column grow-1">
					<div className="cv-name-container">
						<NameComponent
							fullName={userData.fullName}
						></NameComponent>
					</div>
					<p className="cv-title">{cv_data.title}</p>
					<section className="cv-bio-section">
						<h3>A little something about me...</h3>
						<p>{bioText}</p>
					</section>
				</section>
			</div>

			<div className="cv--bot-row flex">
				<aside className="cv-bot-r-col column grow-1">
					<section className="cv-skills-section">
						<BannerComponent
							iconClass="fas fa-dumbbell fa-2x"
							heading="Skills"
						></BannerComponent>
						<ul className="cv-skills">
							{skills.map((item, i) => {
								return (
									<SkillComponent
										key={i}
										name={item.skillName}
										percent={item.skillLevel}
									></SkillComponent>
								);
							})}
						</ul>

						<BannerComponent
							iconClass="fas fa-comment-dots fa-2x"
							heading="Languages"
						></BannerComponent>
						<ul className="cv-skills">
							{languages.map((item, i) => {
								return (
									<SkillComponent
										key={i}
										name={item.languageName}
										percent={item.languageLevel}
									></SkillComponent>
								);
							})}
						</ul>
						<div className="cv-contact-heading flex align-end justify-center">
							Contact
						</div>
					</section>
					<section className="cv-info-section column justify-start grow-1">
						<div className="cv-contact-section column align-start">
							<ContactComponent
								content={cv_data.tel}
								className="fas fa-phone-square-alt fa-2x"
							></ContactComponent>
							<ContactComponent
								content={userData.email}
								className="fas fa-envelope fa-2x"
							></ContactComponent>
							<ContactComponent
								content={cv_data.address}
								className="fas fa-address-card fa-2x"
							></ContactComponent>
						</div>
						<div className="cv-social-section">
							{cv_data.fbURL && (
								<ContactComponent
									content={cv_data.fbURL}
									className="fab fa-facebook-square fa-2x"
								></ContactComponent>
							)}
							{cv_data.instagramURL && (
								<ContactComponent
									content={cv_data.instagramURL}
									className="fab fa-instagram-square fa-2x"
								></ContactComponent>
							)}
							{cv_data.githubURL && (
								<ContactComponent
									content={cv_data.githubURL}
									className="fab fa-github-square fa-2x"
								></ContactComponent>
							)}
							{cv_data.linkedinURL && (
								<ContactComponent
									content={cv_data.linkedinURL}
									className="fab fa-linkedin fa-2x"
								></ContactComponent>
							)}
							{cv_data.twitterURL && (
								<ContactComponent
									content={cv_data.twitterURL}
									className="fab fa-twitter-square fa-2x"
								></ContactComponent>
							)}
							{cv_data.skypeURL && (
								<ContactComponent
									content={cv_data.skypeURL}
									className="fab fa-skype fa-2x"
								></ContactComponent>
							)}
						</div>
					</section>
				</aside>

				<main className="cv-main-content column grow-1">
					<div className="column main-content-top">
						<section className="cv-work-exp-section column">
							<MainContentHeader
								content="Professional Experience"
								iconClass="fas fa-briefcase fa-2x"
							></MainContentHeader>

							{experience.map((item) => {
								return (
									<WorkAndEducationComp
										data={item}
									></WorkAndEducationComp>
								);
							})}
						</section>

						<section className="cv-education-section">
							<MainContentHeader
								content="Formal Education"
								iconClass="fas fa-graduation-cap fa-2x"
							></MainContentHeader>

							{education.map((item) => {
								return (
									<WorkAndEducationComp
										data={item}
									></WorkAndEducationComp>
								);
							})}
							<div className="filler-div flex grow-1">
								<div className="right-filler"></div>
								<div className="left-filler"></div>
							</div>
						</section>
					</div>
					<div className="main-content-bot flex grow-1 justify-between">
						{!!certification && !!certification[0].certificate && (
							<section className="cert-section column grow-1">
								<div className="ac-heading-group flex align-center justify-between w-100-perc">
									<h2>Certification</h2>
									<div className="ac-icon-container flex align-center justify-center">
										<i className="fas fa-award fa-2x"></i>
									</div>
								</div>
								{certification.map((item, i) => {
									return (
										<AchieveCertsComp
											key={i}
											labels={[
												'Certificate',
												'Expertise',
												'Issued by',
											]}
											data={item}
										></AchieveCertsComp>
									);
								})}
							</section>
						)}

						{!!achievements && !!achievements[0].awardName && (
							<section className="achieve-section column grow-1">
								<div className="ac-heading-group flex align-center justify-between w-100-perc">
									<h2>Achievements</h2>
									<div className="ac-icon-container flex align-center justify-center">
										<i className="fas fa-trophy fa-2x"></i>
									</div>
								</div>
								{achievements.map((item, i) => {
									return (
										<AchieveCertsComp
											key={i}
											labels={[
												'Award Name',
												'Award type',
												'Award Year',
											]}
											data={item}
										></AchieveCertsComp>
									);
								})}
							</section>
						)}
					</div>
				</main>
			</div>
		</div>
	);
};

export default PetarTemplate;
