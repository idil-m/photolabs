import { useReducer, useEffect } from 'react';
import photos from '../mocks/photos';
import topics from '../mocks/topics';

// const useApplicationData = () => {
//   const [modalState, setModalState] = useState({ 
//     displayModal: false, 
//     selectedPhoto: null,
//     similarPhotos: [] // Add this new state
//   });

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

const initialState = {
  modalState: { displayModal: false, selectedPhoto: null, similarPhotos: [] },
  favorites: new Set(),
  photos: photos,
  topics: topics,
};

function reducer(state, action) {
  switch (action.type) {
    case 'FAV_PHOTO_ADDED':
      const newFavoritesAdded = new Set(state.favorites);
      newFavoritesAdded.add(action.payload);
      return { ...state, favorites: newFavoritesAdded };

    case 'FAV_PHOTO_REMOVED':
      const newFavoritesRemoved = new Set(state.favorites);
      newFavoritesRemoved.delete(action.payload);
      return { ...state, favorites: newFavoritesRemoved };

      case 'SET_PHOTO_DATA':
      return { ...state, photos: action.payload };

    case 'SET_TOPIC_DATA':
      return { ...state, topics: action.payload };

    case 'SELECT_PHOTO':
      return { 
        ...state, 
        modalState: { ...state.modalState, selectedPhoto: action.payload,  displayModal: true  }
      };

    case 'DISPLAY_PHOTO_DETAILS':
      return { 
        ...state, 
        modalState: { ...state.modalState, displayModal: action.payload }
      };

      default:
        throw new Error(`Unsupported action type: ${action.type}`);
    }
}


    const useApplicationData = () => {
      const [state, dispatch] = useReducer(reducer, initialState);

      const toggleFavorite = photoId => {
        if (state.favorites.has(photoId)) {
          dispatch({ type: 'FAV_PHOTO_REMOVED', payload: photoId });
        } else {
          dispatch({ type: 'FAV_PHOTO_ADDED', payload: photoId });
        }
      };
    
      const setSelectedPhoto = photo => {
        dispatch({ type: 'SELECT_PHOTO', payload: photo });
      };
    
      useEffect(() => {
        const fetchData = async () => {
          const photoData = await fetchPhotos();
    const topicData = await fetchTopics();
    dispatch({ type: 'SET_PHOTO_DATA', payload: photoData });
    dispatch({ type: 'SET_TOPIC_DATA', payload: topicData });
  };

  fetchData();
}, []);


      return {
        state,
        dispatch,
        toggleFavorite,
        setSelectedPhoto
        
      };
    };
      
    
  
  
  //   const setDisplayModal = (display) => {
//     setModalState({ ...modalState, displayModal: display });
//   };

//   const setSelectedPhoto = (photo) => {
    
    
   
//    console.log("selected",photo)
//     setModalState(prevState => ({ 
//       ...prevState, 
//       selectedPhoto: photo, 
//      similarPhotos: Object.values(photo.similarPhotos)
//     }));
//   };

//   useEffect(() => {
//     if (modalState.selectedPhoto) {
//       setDisplayModal(true);
//     }
//   }, [modalState.selectedPhoto]);

//     modalState,
//     setModalState,
//     favorites,
//     toggleFavorite,
//     setDisplayModal,
//     setSelectedPhoto
//   };
// };



  export default useApplicationData;
  