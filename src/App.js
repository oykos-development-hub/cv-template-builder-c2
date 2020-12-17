import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Redirect,
	Route,
} from 'react-router-dom';
import LoginScreen from './pages/login.screen';
import SignupScreen from './pages/signup.screen';
import CVDataScreen from './pages/cv.data.screen';
import { StoreService } from './services/store.service';
import { ApiService } from './services/api.service';
import './style/login.signup.screen.css';
import './style/react-datepicker.css';
import MVTemplate from './templates/mv-template';
import TemplatesScreen from './pages/templates.screen';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			initialValidation: false,
			loggedIn: false,
			defaultUri: '/cv-data',
		};

		StoreService.initialize();
	}

	componentDidMount() {
		const component = this;

		this.validateToken();

		StoreService.hookOnStoreUpdate('App', (newStoreData) => {
			if (
				newStoreData &&
				newStoreData.user &&
				newStoreData.user.token &&
				!component.state.loggedIn
			) {
				component.setState({
					loggedIn: true,
					redirect: this.state.defaultUri,
				});
			}
			if (
				(!newStoreData ||
					!newStoreData.user ||
					!newStoreData.user.token) &&
				component.state.loggedIn
			) {
				component.setState({
					loggedIn: false,
				});
			}
		});
	}

	validateToken() {
		if (this.state.initialValidation) return;

		const user = StoreService.getStoreProperty('user');
		const token = user ? user.token : '';

		if (token) {
			this.setState(
				{
					initialValidation: true,
				},
				() => {
					ApiService.endpoints
						.validateToken(token)
						.then((response) => {
							if (
								response &&
								response.errorMessage &&
								response.info
							) {
								return alert(
									'There was a problem Logging you into our application. Please try again!'
								);
							}
							if (response && response.successMessage) {
								let newData = response.user
									? response.user
									: null;

								if (newData) {
									newData.fullName = newData.name;
									//newData.cv_data = typeof newData.cv_data === 'object' ? newData.cv_data : JSON.parse(newData.cv_data);
									newData.cv_data = user.cv_data;

									StoreService.updateStoreProperty(
										'user',
										newData
									);

									this.setState({
										loggedIn: true,
										redirect: this.state.defaultUri,
									});
								} else {
									alert(
										'There was a problem Logging you into our application. Please try again!'
									);
								}
							} else {
								alert(
									'There was a problem Logging you into our application. Please try again!'
								);
							}
						});
				}
			);
		}
	}

	render() {
		return (
			<Router>
				{!!this.state.redirect && <Redirect to={this.state.redirect} />}

				<Switch>
					{!!this.state.loggedIn && [
						<Route path="/templates">
							<TemplatesScreen />
						</Route>,
						<Route path="/cv-data">
							<CVDataScreen />
						</Route>,
						<Route path="/mv-template">
							<MVTemplate />
						</Route>,
					]}
					<Route path="/signup">
						<SignupScreen />
					</Route>
					<Route path="/login">
						<LoginScreen />
					</Route>
					<Route path="/">
						<LoginScreen />
					</Route>
				</Switch>
			</Router>
		);
	}
}
