import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ setDisplayModal }) => {
  const handleClose = () => {
    setDisplayModal(false); 
  };
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleClose}>
        <img src={closeSymbol} alt="Close" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
