import React, { useEffect } from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from '../components/PhotoListItem';
import PhotoFavButton from '../components/PhotoFavButton';

//PhotoDetailModal component
const PhotoDetailsModal = ({ photoData, setDisplayModal, setSelectedPhoto, selectedPhoto, similarPhotos, toggleFavorite, favorites }) => {
  // useEffect hook to perform side-effects related to selectedPhoto
  useEffect(() => {

  }, [selectedPhoto]);
  //Function to handle closing modal
  const handleClose = () => {
    setDisplayModal(false);
  };

  // Function to handle setting the selected photo
  const handleSetSelectedPhoto = (photo) => {
    setSelectedPhoto(photo);
  };

  const getPhoto = (id) => {
    const p = photoData.find(photo => photo.id === id);
   
    return p
  };
  
  //Rendering the modal content
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleClose}>
        <img src={closeSymbol} alt="Close" />
      </button>

      {/* Displaying the larger selected photo */}
      {selectedPhoto && (
        <div className="photo-details-modal__images">
          <PhotoFavButton isLiked={favorites.has(selectedPhoto.id)} onToggle={() => toggleFavorite(selectedPhoto.id)} />
          <img src={selectedPhoto.urls.full} alt={`Photo by ${selectedPhoto.username}`} className="photo-details-modal__image" />
          <div className="photo-details-modal__photographer">
            <img src={selectedPhoto.profile} alt={`${selectedPhoto.username}`} className="photo-details-modal__photographer-profile" />
            <div className="photo-details-modal__photographer-info">
              <div className="photo-details-modal__username">{selectedPhoto.username}</div>
              <div className="photo-details-modal__location">
                {selectedPhoto.location.city}, {selectedPhoto.location.country}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Similar Photos Section */}
      <h2 className="photo-details-modal__header">Similar Photo</h2>
      <div className="photo-details-modal__images">
        {similarPhotos && similarPhotos.length > 0 ? (
          similarPhotos.map(photo => (
            <PhotoListItem
              key={photo.id}
              id={photo.id}
              location={photo.location}
              urls={photo.urls}
              username={photo.user.username}
              profile={photo.user.profile}
              similarPhotos={
                getPhoto(photo.id).similar_photos
              }
              isFavorited={favorites.has(photo.id)}
              onToggleFavorite={() => toggleFavorite(photo.id)}
              setDisplayModal={setDisplayModal}
              setSelectedPhoto={handleSetSelectedPhoto}
            />
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};


export default PhotoDetailsModal;



