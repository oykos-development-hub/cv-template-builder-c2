import React, {useEffect, useState} from "react";
import {Redirect,Link} from "react-router-dom";
import background from '../images/background.png';
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
            <div className="text-content">
            <h1>Login</h1>
            <h2>Need a CV builder account?&nbsp; <Link className="redirect" to="/signup">Signup</Link></h2>

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
                <Button content="Login"/>
                </form>
            </div>
        </div>
        <div className='right-side'>
            <img src={background} alt='background' class='background-image'/>
        </div>
    </div>);
}

export default LoginScreen;
