import React, {useState, useEffect, useRef} from 'react';
import InputComponent from '../components/inputComponent';
import Button from '../components/button';
import Avatar from '../components/avatar';
import ImageModal from '../components/imageModal';
import '../style/account-page.css';
import '../style/image.modal.css';
import defaultAvatar from '../images/default-profile.png';
import {StoreService} from "../services/store.service";


const AccountInfo = () => {
  const userData = StoreService.getStoreProperty('user');
  const [data, setData] = useState({
    name: userData.name,
    email: userData.email,
    password: userData.password,
    imgUrl: defaultAvatar,
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

  const onModalClose = () => {
    toggleModal(false);
    console.log('ee')
  };

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

  
  const showMessage = () => {
      const message = document.getElementById('message');
    if(message.style.visibility = 'hidden') {
      message.style.visibility = 'visible';
      setTimeout(() => {
      message.style.visibility = 'hidden';
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
        Object.values(data.errors).forEach(
            (val) => val.length > 0 && (validity = false)
        );
        if (validity === true) {
            console.log(`
              --Submitting--
              Name: ${data.fullName}
              Email:${data.email}
              Password:${data.password}
              `);

          showMessage();

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
            onClose={onModalClose}
          ></ImageModal>
          )
        }
        <div className='acc-page-wrapper'>
          
          <p id='message' className='action-message'>Account info changes saved successfully!</p>
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
                  <Avatar
                    avatarSrc={data.imgUrl}
                    content='PROFILE IMAGE'
                    openImgChangeModal={() => {
                      toggleModal(true)
                      }
                    }
                    // resetImg={resetImg}
                  ></Avatar>
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
                  <input type='checkbox'></input>
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
