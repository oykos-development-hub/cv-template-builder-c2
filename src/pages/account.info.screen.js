import React, {useState} from 'react';
import InputComponent from '../components/inputComponent';
import Button from '../components/button';
import Avatar from '../components/avatar';
import '../style/account-page.css';
import {StoreService} from "../services/store.service";

const AccountInfo = () => {
  const userData = StoreService.getStoreProperty('user');
  const [data, setData] = useState({
    name: userData.name,
    email: userData.email,
    password: userData.password
  });
  const [message, setMessage] = useState('');
  const [errors, setError] = useState({
    name: '',
    email: '',
    password: ''
  });

  const showMessage = () => {
    const message = document.getElementById('message');
    if(message.style.visibility = 'hidden') {
      message.style.visibility = 'visible';
    setTimeout(() => {
      message.style.visibility = 'hidden'
    }, 3000);
    }
    
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData(prev => ({...prev, [name]: value}));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    
    let validity = true;
        Object.values(data).forEach(
            (val) => val.length < 1 && (validity = false)
        );
        Object.values(errors).forEach(
            (val) => val.length > 0 && (validity = false)
        );
        if (validity === true) {
            console.log(`
              --Submitting--
              Name: ${data.fullName}
              Email:${data.email}
              Password:${data.password}
              `);

          setMessage('Changes saved successfully!');
          showMessage();
          
       
          let cachedUserData = StoreService.getStoreProperty('user');
          cachedUserData = {...cachedUserData, ...data};
          StoreService.updateStoreProperty('user', cachedUserData);
        }



  };

  

  return ( 
      <div className='acc-page-wrapper'>
        <p id='message' className='action-message'>{message}</p>
        <form onSubmit={formSubmit}>

          <section className='acc-top-section'>
              <div className='left-col'>
                <h2>Profile Info</h2>

                <InputComponent 
                  name='name'
                  value={data.name}
                  change={handleChange}>
                  <p>NAME</p>
                </InputComponent>

                <InputComponent
                  name='email'
                  value={data.email}
                  change={handleChange}>
                  <p>EMAIL</p>
                </InputComponent>
              </div>
              <div className='right-col'>
                <Avatar></Avatar>
              </div>
          </section>

          <section className='acc-bottom-section'>
              <InputComponent
                name='password'
                value={data.password}
                change={handleChange}>
                <p>PASSWORD</p>
              </InputComponent>

              <div className='checkbox-wrapper'>
                <input type='checkbox' checked></input>
                <label>Show Getting Started</label>
              </div>

              <Button
                content='Save'
              ></Button>

          </section>

        </form>
      </div>)
};

export default AccountInfo;
