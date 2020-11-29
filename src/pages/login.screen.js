import React, {useEffect, useState} from "react";
import {Redirect, Link} from "react-router-dom";
import background from '../images/background.png';
import InputField from  '../components/inputField';
import Button from '../components/button';
import {ApiService} from "../services/api.service";

function LoginScreen () {

    const [redirect,setRedirect] = useState('');
    const [serverResponse, setResponse] = useState('');
    //printing message from server in console
    useEffect(
      () => console.log(serverResponse), [serverResponse]
    )

    const inputRefs = React.useRef([
        React.createRef(), React.createRef()
      ]);

      const [data, setData] = React.useState({});

      const handleChange = (name, value) => {
        setData(prev => ({ ...prev, [name]: value }))
      }

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
          return ApiService.endpoints.login(data.email,data.password).then((response) => {
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

            <div className = 'left-side'>
                {/* <span id = 'login-text'> Login </span>
                <span id = 'sign-up-text'> Need a CV builder account?&nbsp;
                <span
                    id = 'sign-up-link'
                    onClick={() => {
                        setRedirect('/signup');
                    }}
                >
                    Sign up
                </span>
                </span> */}
                <div className="text-content">
                        <h1>Login</h1>
                        <h2>Need a CV builder account?&nbsp; <Link className="redirect" to="/signup">Signup</Link></h2>
                    

                <form onSubmit={submitForm} className="form">
                    <InputField
                    ref={inputRefs.current[0]}
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    validation={"required|email"}
                    />
                    <InputField
                    ref={inputRefs.current[1]}
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    validation="required|min:6|max:12"
                    />
                    <Button />
                </form>
              </div>
            </div>
            <div className = 'right-side'>
                <img src={background} alt= 'background' class = 'background-image'/>
            </div>
    </div>);
}

export default LoginScreen;
