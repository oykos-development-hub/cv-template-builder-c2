import React, { useState } from 'react';
import Button from './button';

const Avatar = ({ openImgChangeModal, resetImg, content, avatarSrc }) => {
	return (
		<div className="avatar-wrapper">
			<p className="input-heading">{content}</p>
			<img className="acc-avatar" src={avatarSrc}></img>
			<Button
				type="button"
				onClick={openImgChangeModal}
				content="Change Image"
			></Button>

			<Button type="button" onClick={resetImg} content="Reset"></Button>
		</div>
	);
};

export default Avatar;
