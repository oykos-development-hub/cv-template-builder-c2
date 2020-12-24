import React from 'react';

const MainContentHeader = (props) => {
	return (
		<div className="main-content-unit flex">
			<div className="we-header-left flex justify-center">
				<div className="we-icon-container flex align-center justify-center self-center">
					<i className={props.iconClass}></i>
				</div>
			</div>
			<div className="we-header-right">
				<h3 className="we-content-heading">{props.content}</h3>
			</div>
		</div>
	);
};

export default MainContentHeader;
