import React, {useEffect, useState} from "react";
import {Redirect} from "react-router-dom";
import '../login.screen.css';
import background from '../images/login-picture.png';
import InputField from '../components/inputField';
import Button from '../components/button';
import {ApiService} from "../services/api.service";
import {StoreService} from "../services/store.service";

function LoginScreen() {
    const [redirect, setRedirect] = useState('');
    const [serverResponse, setResponse] = useState('');
    let userData = StoreService.getStoreProperty('user');
    const [data, setData] = React.useState({
        email: userData.email,
        password: userData.password
    });

    useEffect(
        () => {
            console.log(serverResponse);
            console.log(' data ', data);
        }
    );

    const inputRefs = React.useRef([
        React.createRef(), React.createRef()
    ]);

    const handleChange = (name, value) => {
        let cachedUserData = StoreService.getStoreProperty('user');

        cachedUserData[name] = value;

        StoreService.updateStoreProperty('user', cachedUserData);

        setData(prev => ({...prev, [name]: value}));
    };
    const submitForm = (e) => {
        e.preventDefault();

        let isValid = true;

        for (let i = 0; i < inputRefs.current.length; i++) {
            const valid = inputRefs.current[i].current.validate()
            console.log(valid)
            if (!valid) {
                isValid = false
            }
        }

        if (!isValid) {
            return
        }

        //sending a request to server via API
        if (data) {
            return ApiService.endpoints.login(data.email, data.password).then((response) => {
                if (response && response.errorMessage && response.info) {
                    setResponse({
                        errorMessage: response.info
                    });
                }
            });
        }
    }

    return (<div className="login-screen">
        {
            redirect !== '' && <Redirect to={redirect}/>
        }

        <div className='left-side'>
            <span id='login-text'> Login </span>
            <span id='sign-up-text'> Need a CV builder account?&nbsp;
                <span
                    id='sign-up-link'
                    onClick={() => {
                        console.log(' Data before switching to SignUp - ', data);
                        setRedirect('/signup');
                    }}
                >
                    Sign up
                </span>
            </span>

            <form onSubmit={submitForm} className="form">
                <InputField
                    ref={inputRefs.current[0]}
                    name="email"
                    type="email"
                    value={data.email}
                    placeholder="Email"
                    onChange={handleChange}
                    validation={"required|email"}
                />
                <InputField
                    ref={inputRefs.current[1]}
                    name="password"
                    type="password"
                    value={data.password}
                    placeholder="Password"
                    onChange={handleChange}
                    validation="required|min:4|max:12"
                />
                <Button/>
            </form>
        </div>
        <div className='right-side'>
            <img src={background} alt='background' class='background-image'/>
        </div>
    </div>);
}

export default LoginScreen;
