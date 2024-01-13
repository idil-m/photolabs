import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = ({ favoriteCount }) => {
  return (
    <div className="home-route">
      <TopNavigationBar favoriteCount={favoriteCount} />
      <PhotoList />
    </div>
  );
};

export default HomeRoute;
