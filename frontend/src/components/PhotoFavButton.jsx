import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isLiked, setIsLiked] = useState(false);

  const hitLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div className="photo-list__fav-icon" onClick={hitLike}>
      <div className="photo-list__fav-icon-svg">
      <FavIcon selected={isLiked} />
      </div>
    </div>
  );
}

export default PhotoFavButton;