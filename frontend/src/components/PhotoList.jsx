import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";




const PhotoList = ({ photoData, toggleFavorite, favorites, setDisplayModal, setSelectedPhoto }) => {
  return (
    <ul className="photo-list">
      {photoData.map(photo => (
        <li key={photo.id} className="">
          <PhotoListItem
            id={photo.id}
            isFavorited={favorites.has(photo.id)}
            onToggleFavorite={() => toggleFavorite(photo.id)}
            location={photo.location}
            urls={photo.urls}
            username={photo.user.username}
            profile={photo.user.profile}
            similarPhotos={photo.similar_photos}
            setDisplayModal={setDisplayModal}
            setSelectedPhoto={setSelectedPhoto}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
