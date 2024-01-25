import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, alwaysRed }) => {
return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={alwaysRed} />
    </div>
  );
};



export default FavBadge;