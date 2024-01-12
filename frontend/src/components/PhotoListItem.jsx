import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = ({ id, location, imageSource, username, profile }) => {
  return (
    <div className="photo-list-item">
      <img src={imageSource} alt={`Photo ${id}`} />
      <div className="photographer-info">
        <img src={profile} alt={`${username}'s profile`} />
        <span className="username">{username}</span>
      </div>
      <div className="photo-location">
        {location.city}, {location.country}
      </div>
    </div>
  );
};


export default PhotoListItem;
