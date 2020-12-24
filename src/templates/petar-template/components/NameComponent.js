import React from 'react';

const NameComponent = (props) => {
	let nameArr = props.fullName.split(' ');
	const firstName = nameArr[0].split('');
	const lastName = nameArr[1].split('');

	return (
		<div>
			<span className="name-comp-span">
				{firstName.map((letter) => {
					return <span className="name-comp-letter">{letter}</span>;
				})}
			</span>
			<span className="name-comp-span">
				{lastName.map((letter) => {
					return <span className="name-comp-letter">{letter}</span>;
				})}
			</span>
		</div>
	);
};

export default NameComponent;
