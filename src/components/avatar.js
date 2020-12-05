import React, {useState} from 'react';

const Avatar = ({openImgChangeModal, resetImg, content, avatarSrc}) => {
 

  return (
    <div className='avatar-wrapper'>
      <p>{content}</p>
      <img 
        className='acc-avatar'
        src={avatarSrc}
      ></img>
      <button type='button' onClick={openImgChangeModal}>Change Image</button>
      <button type='button' onClick={resetImg}>Reset</button>
    </div>
  )
} 

export default Avatar;