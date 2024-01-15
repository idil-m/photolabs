import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';
import React from 'react'; 

const PhotoListItem = ({ id, location, imageSource, username, profile, isFavorited, onToggleFavorite, setDisplayModal, setSelectedPhoto }) => {
  const handleImageClick = () => {
    console.log("Photo clicked, opening modal");
    setSelectedPhoto({ id, location, imageSource, username, profile });
    setDisplayModal(true);
  };

  return (
    <div className="photo-list__item">
      <img src={imageSource} alt={`Photo ${id}`} className="photo-list__image" onClick={handleImageClick} />
      <div className="photo-list__user-details">
        <img src={profile} alt={`${username}'s profile`} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <span>{username}</span>
          <div className="photo-list__user-location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>
      <PhotoFavButton isLiked={isFavorited} onToggle={onToggleFavorite} />
    </div>
  );
};
export default PhotoListItem;
