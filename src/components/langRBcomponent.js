import React, { useEffect, useState } from 'react';

const LangRBcomponent = (props) => {
	return (
		<div className="radio-button-group-container rb-component">
			<p className="radio-label"> {props.label} </p>
			<form className="flex radio-button-form">
				<div className="radio-group flex padding-10 align-center">
					<input
						type="radio"
						name="langProficiency"
						value="Beginner"
						className="language-radio-button"
						checked={props.value === 'Beginner'}
						onChange={props.onChange}
					/>
					<label>Beginner</label>
				</div>
				<div className="radio-group flex padding-10 align-center">
					<input
						type="radio"
						name="language"
						value="Elementary"
						className="language-radio-button"
						checked={props.value === 'Elementary'}
						onChange={props.onChange}
					/>
					<label>Elementary</label>
				</div>
				<div className="radio-group flex padding-10 align-center">
					<input
						type="radio"
						name="language"
						value="Intermediate"
						className="language-radio-button"
						checked={props.value === 'Intermediate'}
						onChange={props.onChange}
					/>
					<label>Intermediate</label>
				</div>
				<div className="radio-group flex padding-10 align-center">
					<input
						type="radio"
						name="language"
						value="Advanced"
						className="language-radio-button"
						checked={props.value === 'Advanced'}
						onChange={props.onChange}
					/>
					<label>Advanced</label>
				</div>
				<div className="radio-group flex padding-10 align-center">
					<input
						type="radio"
						name="language"
						value="Proficient"
						className="language-radio-button"
						checked={props.value === 'Proficient'}
						onChange={props.onChange}
					/>
					<label>Proficient</label>
				</div>
			</form>
		</div>
	);
};

export default LangRBcomponent;
