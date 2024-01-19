import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import React, { useState } from 'react';
//HomeRoute component and props
const HomeRoute = ({ photoData, topicData, setDisplayModal, setSelectedPhoto, favorites, toggleFavorite, onTopicSelect }) => {
//Render teh HomeRoute component
  return (
    <div className="home-route">
      <TopNavigationBar favoriteCount={favorites.size} topicData={topicData} onTopicSelect={onTopicSelect} />
      <PhotoList
        photoData={photoData}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
        setDisplayModal={setDisplayModal}
        setSelectedPhoto={setSelectedPhoto}
      />
    </div>
  );
};
export default HomeRoute;