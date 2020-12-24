import React from 'react';

const ContactComponent = (props) => {
	return (
		<div className="cv-contact-component flex align-center">
			<div className="cv-contact-icon">
				<i className={props.className}></i>
			</div>
			<p style={props.textStyle} className="cv-info-text">
				{props.content}
			</p>
		</div>
	);
};

export default ContactComponent;
