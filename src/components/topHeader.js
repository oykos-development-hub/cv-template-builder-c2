import React from 'react';
import { Redirect } from 'react-router-dom';
import Button from './button';
import { StoreService } from '../services/store.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default class TopHeader extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		const iconSignOut = <FontAwesomeIcon icon={faSignOutAlt} size={'1x'} />;
		return (
			<div className="flex w-100-perc justify-between align-center padding-h-10perc border-box navbar">
				{!!this.state.redirect && <Redirect to={this.state.redirect} />}

				<div
					style={{
						fontSize: '24px',
						fontWeight: 'bold',
						letterSpacing: '1px',
					}}
				>
					CV builder
				</div>

				<div className="grow-1 flex align-center justify-start margin-h-15">
					<div
						className="padding-10 pointer"
						onClick={() => {
							this.setState({
								redirect: '/templates',
							});
						}}
					>
						My templates
					</div>
					<div
						className="padding-10 pointer"
						onClick={() => {
							this.setState({
								redirect: '/cv-data',
							});
						}}
					>
						CV data
					</div>
				</div>

				<div className="flex justify-between padding-b-20">
					<Button
						content={iconSignOut}
						onclick={() => {
							StoreService.clearStoreData();

							this.setState({
								redirect: '/login',
							});
						}}
					/>
				</div>
			</div>
		);
	}
}
