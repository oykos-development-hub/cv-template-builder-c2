import React from 'react';

const AchieveCertsComp = (props) => {
	const { data, labels } = props;

	return (
		<div className="ac-group column grow-1">
			<div className="column ac-subgroup">
				<h5 className="ac-labels">{labels[0]}</h5>
				<h4>{data.certificate || data.awardName}</h4>
			</div>
			<div className="column ac-subgroup">
				<h5 className="ac-labels">{labels[1]}</h5>
				<h4>{data.expertise || data.awardType}</h4>
			</div>
			<div className="column ac-subgroup">
				<h5 className="ac-labels">{labels[2]}</h5>
				<h4>{data.issuedBy || data.awardYear}</h4>
			</div>
		</div>
	);
};

export default AchieveCertsComp;
