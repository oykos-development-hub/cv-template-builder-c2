import React from 'react';

const BannerComponent = (props) => {
	return (
		<div className="banner-component">
			<div className="cv-banner-heading">
				<p className="flex align-center">{props.heading}</p>
			</div>
			<div className="cv-banner-icon-wrp">
				<i className={props.iconClass}></i>
			</div>
			<div className="skewed-banner-element"></div>
			<div className="skewed-banner-element skew-reverse"></div>
		</div>
	);
};

export default BannerComponent;
