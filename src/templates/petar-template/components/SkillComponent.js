import React from 'react';

const SkillComponent = (props) => {
	let skillStyle;

	console.log(props.percent);

	if (isNaN(Number(props.percent[0]))) {
		switch (props.percent) {
			case 'Beginner':
				skillStyle = {
					width: '20%',
				};
				break;
			case 'Elementary':
				skillStyle = {
					width: '40%',
				};
				break;
			case 'Intermediate':
				skillStyle = {
					width: '60%',
				};
				break;
			case 'Advanced':
				skillStyle = {
					width: '80%',
				};
				break;
			case 'Proficient':
				skillStyle = {
					width: '100%',
				};
				break;
		}
	} else {
		skillStyle = {
			width: props.percent + '%',
		};
	}

	return (
		<div className="cv-skill-component column grow-1">
			<h3>{props.name}</h3>
			<div className="cv-skillbar-outer flex align-center">
				<div style={skillStyle} className="cv-skillbar-inner"></div>
			</div>
		</div>
	);
};

export default SkillComponent;
