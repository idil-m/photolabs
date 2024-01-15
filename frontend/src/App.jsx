import React, { useState } from 'react';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';
import HomeRoute from './routes/HomeRoute';

const App = () => {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <div className="App">
      <HomeRoute
        favoriteCount={5}
        photoData={photos}
        topicData={topics}
        setDisplayModal={setDisplayModal}
        displayModal={displayModal}
      />
    </div>
  );
};

export default App;
