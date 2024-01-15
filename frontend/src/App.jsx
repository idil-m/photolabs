import React, { useState } from 'react';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal'; 

const App = () => {
  const [modalState, setModalState] = useState({ displayModal: false, selectedPhoto: null });

  return (
    <div className="App">
    <HomeRoute
      favoriteCount={5}
      photoData={photos}
      topicData={topics}
      setModalState={setModalState}
    />
    {modalState.displayModal ? 
      <PhotoDetailsModal 
        setDisplayModal={() => setModalState({ ...modalState, displayModal: false })} 
        selectedPhoto={modalState.selectedPhoto} 
      /> : null}
  </div>
  );
};

export default App;
