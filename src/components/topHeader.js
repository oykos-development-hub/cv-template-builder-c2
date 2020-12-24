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
		let menuStyle = 'padding-10 pointer border-box';
		let cvData = menuStyle;
		let myTemplates = menuStyle;
		let account = menuStyle;
		switch (this.props.active) {
			case 'cvData':
				cvData += ' menu-active';
				break;
			case 'myTemplates':
				myTemplates += ' menu-active';
				break;
			case 'account':
				account += ' menu-active';
				break;
		}

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

				<div className="grow-1 flex align-center justify-between margin-h-15">
					<div
						className={myTemplates}
						onClick={() => {
							this.setState({
								redirect: '/templates',
							});
						}}
					>
						My templates
					</div>
					<div
						className="flex align-center"
						style={{ paddingRight: '30px' }}
					>
						<div
							className={cvData}
							onClick={() => {
								this.setState({
									redirect: '/cv-data',
								});
							}}
						>
							CV data
						</div>
						<div
							className={account}
							onClick={() => {
								this.setState({
									redirect: '/account',
								});
							}}
						>
							Account
						</div>
					</div>
				</div>

				<div className="header-button flex justify-between padding-b-20">
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
