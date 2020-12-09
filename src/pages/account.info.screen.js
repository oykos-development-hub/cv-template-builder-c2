import React, {useState, useEffect, useRef} from 'react';
import InputComponent from '../components/inputComponent';
import Button from '../components/button';
import Avatar from '../components/avatar';
import ImageModal from '../components/imageModal';
import '../style/account-page.css';
import '../style/image.modal.css';
import defaultAvatar from '../images/default-profile.png';
import {StoreService} from "../services/store.service";
import {fadeOut, fadeIn} from '../components/appearAnimation';


const AccountInfo = () => {
  const userData = StoreService.getStoreProperty('user');
  const [data, setData] = useState({
    name: userData.name,
    email: userData.email,
    password: userData.password,
    imgUrl: userData.imgUrl,
    showOnStarting: userData.showOnStarting,
    errors: {
      name: '',
      email: '',
      password: ''
    }
  });


  const [modalStatus, toggleModal] = useState(false);
  const didMountRef = useRef(false);
  const root = document.getElementById('root');
  const modal = document.getElementById('modal-root');

  const onClose = () => {
    toggleModal(false);
    didMountRef.current = false;
    root.classList.toggle('active');
  }

  const submitImgForm = (url) => {
    setData(prev => ({...prev, imgUrl: url}));
    toggleModal(false);
    didMountRef.current = false;
    root.classList.toggle('active');
  };

  const onEscKeyDown = e => {
    if (e.key !== "Escape") return;
    toggleModal(false);
  };

  useEffect(() => {
    if(didMountRef.current) {
      root.classList.toggle('active');
      window.addEventListener('keydown', onEscKeyDown)
    }
    else didMountRef.current = true
    return () => {
      window.removeEventListener('keydown', onEscKeyDown);
    }
  }, [modalStatus])

  const handleChange = (e) => {
    const {name, value, checked, type} = e.target;
    if(type === 'checkbox') {
      setData(prev => ({...prev, showOnStarting: checked}));
    }
    setData(prev => ({...prev, [name]: value}));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let validity = true;
        Object.values(data).forEach(
            (val) => val.length < 1 && (validity = false)
        );
        Object.values(data.errors).forEach(
            (val) => val.length > 0 && (validity = false)
        );
        if (!emailReg.test(String(data.email).toLowerCase())) {
          setData(prev => ({...prev, errors: {...prev.errors, email: 'Please enter a valid email adress.'}}));
          validity = false;
        }
        if (validity === true) {
            console.log(`
              --Submitting--
              Name: ${data.fullName}
              Email:${data.email}
              Password:${data.password}
              `);

          fadeIn('message')

          let cachedUserData = StoreService.getStoreProperty('user');
          cachedUserData = {...cachedUserData, ...data};
          StoreService.updateStoreProperty('user', cachedUserData);
        }
  };

  return ( <>
        {modalStatus && (
          <ImageModal
            defaultAvatar={defaultAvatar}
            modalStatus={modalStatus}
            submitImgForm={submitImgForm}
            onClose={onClose}
          ></ImageModal>
          )
        }
        <div className='acc-page-wrapper'>
          
          <p id='message' className='action-message'>Account info changes saved successfully!</p>
          <form onSubmit={formSubmit}>
          <h2>Profile Info</h2>
            <section className='acc-top-section'>
                <div className='left-col'>
                  
                  <InputComponent 
                    name='name'
                    value={data.name}
                    change={handleChange}>
                    <p className='input-heading'>NAME</p>
                  </InputComponent>

                  <InputComponent
                    name='email'
                    value={data.email}
                    change={handleChange}
                    error={data.errors.email}>
                    <p className='input-heading'>EMAIL</p>
                  </InputComponent>
                </div>
                <div className='right-col'>
                  <Avatar
                    avatarSrc={data.imgUrl}
                    content='PROFILE IMAGE'
                    openImgChangeModal={() => {
                      toggleModal(true)
                      }
                    }
                    resetImg={() => {
                      const confirmation = window.confirm('Reseting will remove your current profile picture and replace it with an empty avatar. Are you sure you want to proceed?');

                      if(confirmation) {
                        setData(prev => ({...prev, imgUrl: defaultAvatar}))
                      }
                    }}
                  ></Avatar>
                </div>
            </section>

            <section className='acc-bottom-section'>
                <InputComponent
                  name='password'
                  value={data.password}
                  change={handleChange}>
                  <p className='input-heading'>PASSWORD</p>
                </InputComponent>

                <div className='checkbox-wrapper'>
                  <input 
                  type='checkbox'
                  onChange={handleChange}
                  checked={data.showOnStarting}
                  ></input>
                  <label>Show Getting Started</label>
                </div>

                <Button
                  content='Save'
                ></Button>

            </section>

          </form>
        </div>
    </>)
};

export default AccountInfo;
