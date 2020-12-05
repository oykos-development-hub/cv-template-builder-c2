import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Button from './button';

const ImageModal = (props) => {
  const [imgUrl, setImgUrl] = useState(props.defaultAvatar);
  const [imgFile, setImgFile] = useState({});

  const onChosenImg = () => {
    const img = document.getElementById('img-input').files[0];
    const reader  = new FileReader();
    setImgFile(img);
    if (img) {
      reader.readAsDataURL(img);
    }
    reader.onloadend = function () {
      setImgUrl(reader.result);
    } 
  }
  
  return ReactDOM.createPortal(
    <div>
      <div 
      id='modal' 
      className='img-modal-wrapper'>
        <h1>Add a new profile picture</h1>
        <hr/>
        <form 
        className='img-modal-form'
        onSubmit={(e) => {
          e.preventDefault();
          props.submitImgForm(imgUrl);
        }}
        >
          <div className='img-input-container'>
            <img 
            src={imgUrl} 
            alt="Uploaded image"
            id='previewImg'
            />
            <label htmlFor='img-input'>Choose an image</label>
            <input 
            type='file' 
            size='' 
            accept='image/' 
            id='img-input'
            onChange={onChosenImg}
            ></input>
          </div>
          <div className='img-modal-buttons'>
            <Button
              content='Save'
              type='submit'
            ></Button>
            <Button
              content='Cancel'
              id='cancelBtn'
              onClick={() => props.onClose}
            ></Button>
          </div>
        </form>  
      </div>
    </div>,
    document.getElementById('modal-root')
  )
}

export default ImageModal
