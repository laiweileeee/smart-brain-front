import React from 'react';
import './ImageLinkForm.css';

//instead of passing props.onInputChange, destructure it instead
const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3'>
        <strong>{'This Magic App will detect faces in your pictures. Give it a try!'}</strong>
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-4">
          <input 
            className='f4 pa2 w-70 center' 
            type="text" 
            placeholder="Insert URL here" 
            onChange={onInputChange} 
            />
          <button
            className='w-30 grow f4 link ph3 pv2 dib black bg-light-red'
            onClick={onButtonSubmit}>
            <strong>Detect</strong></button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;