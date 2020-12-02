import React, {useState} from 'react';
import InputComponent from '../components/inputComponent';
import Button from '../components/button';
import Avatar from '../components/avatar';
import '../style/account-page.css';
// import {StoreService} from "../services/store.service";

const AccountInfo = () => {
  const [data, setAccData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const inputChange = () => {

  }

  const formSubmit = () => {

  }

  

  return ( 
      <div className='acc-page-wrapper'>
        <form onSubmit={formSubmit}>

          <section className='acc-top-section'>
              <div className='left-col'>
                <h2>Profile Info</h2>

                <InputComponent 
                  name={data.name}
                  value={data.name}
                  onChange={inputChange}>
                  <p>NAME</p>
                </InputComponent>

                <InputComponent
                  name={data.email}
                  value={data.email}
                  onChange={inputChange}>
                  <p>EMAIL</p>
                </InputComponent>
              </div>
              <div className='right-col'>
                <Avatar></Avatar>
              </div>
          </section>

          <section className='acc-bottom-section'>
              <InputComponent
                name={data.password}
                value={data.password}
                onChange={inputChange}>
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
