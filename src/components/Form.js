import React from "react";
import InputComponent from "./inputComponent";
import SubmitComponent from "./submitComponent";
import {ApiService} from "../services/api.service";
import {StoreService} from "../services/store.service";

const Regex = RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i);

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        let userData = StoreService.getStoreProperty('user');

        this.state = {
            fullName: userData && userData.fullName ? userData.fullName : '',
            email: userData && userData.email ? userData.email : '',
            password: userData && userData.password ? userData.password : '',
            repPassword: "",
            errors: {
                fullName: "",
                email: "",
                password: "",
                repPassword: "",
            }
        };
    }

    handleChange = e => {
        e.preventDefault();

        const {name, value} = e.target;
        let cachedUserData = StoreService.getStoreProperty('user');

        cachedUserData = cachedUserData ? cachedUserData : {};
        cachedUserData[name] = value;

        StoreService.updateStoreProperty('user', cachedUserData);

        this.setState({[name]: value});
    }

    handleBlur = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        this.setState({[name]: value});
        let errors = this.state.errors;
        switch (name) {
            case 'fullName':
                errors.fullName = value.length < 1 ? 'Full name must be filled in' : '';
                break;
            case 'email':
                errors.email = Regex.test(value) ? '' : 'Email is not valid';
                break;
            case 'password':
                errors.password = value.length < 1 ? 'Password must be filled in' : '';
                break;
            case 'repPassword':
                errors.repPassword = value !== this.state.password ? 'Passwords do not match ' : '';
                break;
            default:
                break;
        }
        this.setState(Object.assign(this.state, {errors, [name]: value}));
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let validity = true;

        Object.values(this.state).forEach(
            (val) => val.length < 1 && (validity = false)
        );
        Object.values(this.state.errors).forEach(
            (val) => val.length > 0 && (validity = false)
        );
        if (this.state.password !== this.state.repPassword) {
            this.setState({
                password: '',
                repPassword: ''
            });
            alert("Passwords don't match.");
        } else if (!validity || !this.state.email || !this.state.fullName) {
            alert('Please fill mandatory inputs - name, email and password.');
        } else  {
            return ApiService.endpoints.signUp(
                this.state.email,
                this.state.password,
                this.state.fullName
            ).then((response) => {
                if (response && response.errorMessage && response.info) {
                    this.setState({
                        errorMessage: response.info
                    });
                }
                if (response && response.successMessage) {
                    const newData = response.user ? response.user : null;

                    if (newData) {
                        newData.fullName = newData.name;

                        StoreService.updateStoreProperty('user', newData);

                        alert('Successfully Signed Up. Enjoy our application!');
                    } else {
                        alert('There was a problem Signing you up into our application. Maybe email you provided already exists in our database? Please try again!');
                    }
                } else {
                    alert('There was a problem Signing you up into our application. Maybe email you provided already exists in our database? Please try again!');
                }
            });
        }
    }

    render() {
        const {errors} = this.state
        return (
            <form onSubmit={this.handleSubmit} noValidate>
                <InputComponent
                    name="fullName"
                    text="Full name"
                    type="text"
                    value={this.state.fullName}
                    change={this.handleChange}
                    blur={this.handleBlur}
                    error={errors.fullName}
                />
                <InputComponent
                    name="email"
                    text="Email"
                    type="email"
                    value={this.state.email}
                    change={this.handleChange}
                    blur={this.handleBlur}
                    error={errors.email}
                />
                <InputComponent
                    name="password"
                    text="Password"
                    type="password"
                    value={this.state.password}
                    change={this.handleChange}
                    blur={this.handleBlur}
                    error={errors.password}
                />
                <InputComponent
                    name="repPassword"
                    text="Repeat Password"
                    type="password"
                    value={this.state.repPassword}
                    change={this.handleBlur}
                    blur={this.handleBlur}
                    error={errors.repPassword}
                />
                <SubmitComponent
                    name="submit"
                    type="submit"
                    classes="button"
                    value="Sign up"
                />
            </form>
        );
    }
}

