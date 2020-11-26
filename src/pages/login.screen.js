import React, {useState} from "react";
import {Redirect, Link} from "react-router-dom";
import '../login.screen.css';
import background from '../images/login-picture.png';
import InputField from  '../components/inputField';
import Button from '../components/button';

function LoginScreen () {
    
    const [redirect,setRedirect] = useState('');

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
    
        console.log("Logged In");
        
      }

    return (<div className="login-screen">
        {
            redirect !== '' && <Redirect to={redirect}/>
        }

        <div className = 'login-screen'>
            <div className = 'left-side'>
                <span id = 'login-text'> Login </span>
                <span id = 'sign-up-text'> Need a CV builder account?&nbsp;
                <span
                    id = 'sign-up-link'
                    onClick={() => {
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
                    placeholder="email"
                    onChange={handleChange}
                    validation={"required|email"}
                    />
                    <InputField
                    ref={inputRefs.current[1]}
                    name="password"
                    type="password"
                    placeholder="password"
                    onChange={handleChange}
                    validation="required|min:6|max:12"
                    />
                    <Button />
                </form>
            </div>
            <div className = 'right-side'>
                <img src={background} alt="Background image" class = 'background-image'/>
            </div>
        </div>
    </div>);
}

export default LoginScreen;
