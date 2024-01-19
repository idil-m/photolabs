import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';
import React from 'react';
//PhotolistITem compenent is used to display single photo item list
const PhotoListItem = ({ id, location, urls, username, profile, isFavorited, onToggleFavorite, setSelectedPhoto, similarPhotos }) => {
  //Function is triggered when main photo is
  const handleImageClick = () => {
    setSelectedPhoto({ id, location, urls, username, profile, similarPhotos });
  };
//Render method for the Photolistitem and the container for indiv photo item
  return (
   
    <div className="photo-list__item">
      <PhotoFavButton isLiked={isFavorited} onToggle={onToggleFavorite} />
      <img src={urls.regular} alt={`Photo ${id}`} className="photo-list__image" onClick={handleImageClick} />

      <div className="photo-list__user-details">
        <img src={profile} alt={`${username}'s profile`} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <span>{username}</span>
          <div className="photo-list__user-location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>

    </div>
  );
};
export default PhotoListItem;
