import React from 'react';

export default class Button extends React.Component {
	render() {
		return (
			<button
				className="button"
				type={this.props.type}
				onClick={this.props.onclick}
			>
				{this.props.content}
			</button>
		);
	}
}
