import React, { useEffect } from 'react';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal'; 
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const { state, dispatch, toggleFavorite, setSelectedPhoto, setDisplayModal, fetchPhotosByTopic } = useApplicationData();
  
  const handleTopicSelect = (topicId) => {
    fetchPhotosByTopic(topicId);
  };

  return (
    <div className="App">
      <HomeRoute
        photoData={state.photoData}
        topicData={state.topicData}
        setDisplayModal={setDisplayModal}
        setSelectedPhoto={setSelectedPhoto}
        onTopicSelect={handleTopicSelect}
        favorites={state.favorites}
        toggleFavorite={toggleFavorite}
      />
      {state.modalState.displayModal && (
        <PhotoDetailsModal
          setDisplayModal={setDisplayModal}
          selectedPhoto={state.modalState.selectedPhoto}
          similarPhotos={state.modalState.similarPhotos} // Pass similar photos to the modal
          setSelectedPhoto={setSelectedPhoto}
          favorites={state.favorites}
          toggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
};


export default App;
