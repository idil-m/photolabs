import React from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';


const App = () => {
  //Custom hooks
  const { state, dispatch, toggleFavorite, setSelectedPhoto, setDisplayModal, fetchPhotosByTopic } = useApplicationData();
//Function to handle topic selection and fetch photos
  const handleTopicSelect = (topicId) => {
    fetchPhotosByTopic(topicId);
  };

  return (
    <div className="App">
      {/*HomeRoute displays the main page with photo and topics*/}
      <HomeRoute
        photoData={state.photoData}
        topicData={state.topicData}
        setDisplayModal={setDisplayModal}
        setSelectedPhoto={setSelectedPhoto}
        onTopicSelect={handleTopicSelect}
        favorites={state.favorites}
        toggleFavorite={toggleFavorite}
      />
      {/*Renders the PhotodetailMOdal if modal is set to display*/}
      {state.modalState.displayModal && (
        <PhotoDetailsModal
          setDisplayModal={setDisplayModal}
          selectedPhoto={state.modalState.selectedPhoto}
          similarPhotos={state.modalState.similarPhotos}
          setSelectedPhoto={setSelectedPhoto}
          favorites={state.favorites}
          toggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
};


export default App;
