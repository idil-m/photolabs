import React from 'react';

//import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import FavBadge from './components/FavBadge';
import FavIcon from './components/FavIcon';
import PhotoFavButton from './components/PhotoFavButton';
import PhotoList from './components/PhotoList';
import TopicList from 'components/TopicList';
import TopicListItem from 'components/TopicListItem';
import TopNavigation from 'components/TopNavigationBar';

// Note: Rendering a single component to build components in isolation
//const sampleDataForPhotoListItem = {
  //id: "1",
  //location: {
    //city: "Montreal",
    //country: "Canada",
  //},
  //imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  //username: "Joe Example",
 // profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//};


const App = () => (
  //const photos = new Array(3).fill(sampleDataForPhotoListItem);
  //key={photo.id + index} photo={photo} 
  
    <div className="App">
     
     <PhotoList/> 
          {/*PhotoListItem /> */} 
        {/*<FavBadge/> */} 
      {/*FavIcon/> */}
      {/*PhotoFavButton/> */}
      
      {/*TopicList/>*/}     
       {/*TopicListItem/>*/}
      {/*TopNavigation/>*/}
    </div>
  
);

export default App;
