import React from 'react';

const WorkAndEducationComp = (props) => {
	const { data } = props;
	let from = '',
		to = '';

	if (data.workStartDate && data.workEndDate) {
		from = data.workStartDate.slice(3);
		to = data.workEndDate.slice(3);
	} else {
		from = data.educationStartDate.slice(3);
		to = data.educationEndDate.slice(3);
	}

	return (
		<div className="main-content-unit flex">
			<div className="we-content-left column align-center justify-center">
				<p>{from}</p>
				<p>-</p>
				<p>{to}</p>
			</div>
			<div className="we-content-right">
				<h3 className="we-jobTitle-degree">
					{data.jobTitle || data.degree}
				</h3>
				<p className="we-company-school">
					{data.company || data.school}
				</p>
				<p className="we-desc">
					{data.jobDescription || data.educationDescription}
				</p>
			</div>
		</div>
	);
};

export default WorkAndEducationComp;
