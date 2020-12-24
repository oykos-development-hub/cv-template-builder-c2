import React from 'react';
import Button from './button';

const Avatar = (props) => {
	return (
		<div className="avatar-wrapper">
			<p className="input-heading">{props.content}</p>
			<img className="acc-avatar" src={props.avatarSrc}></img>
			<Button
				type="button"
				onclick={props.onClick}
				content="Change Image"
			></Button>

			<Button
				type="button"
				onclick={props.resetImg}
				content="Reset"
			></Button>
		</div>
	);
};

export default Avatar;
