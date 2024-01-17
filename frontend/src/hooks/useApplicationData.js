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
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favorites: new Set(state.favorites).add(action.payload) };
    case ACTIONS.FAV_PHOTO_REMOVED:
      const newFavorites = new Set(state.favorites);
      newFavorites.delete(action.payload);
      return { ...state, favorites: newFavorites };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photos: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topics: action.payload };
    case ACTIONS.SELECT_PHOTO:
      return { ...state, modalState: { ...state.modalState, selectedPhoto: action.payload, displayModal: true } };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, modalState: { ...state.modalState, displayModal: action.payload } };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFavorite = photoId => {
    const actionType = state.favorites.has(photoId) ? ACTIONS.FAV_PHOTO_REMOVED : ACTIONS.FAV_PHOTO_ADDED;
    dispatch({ type: actionType, payload: photoId });
  };

  const setSelectedPhoto = photo => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  };
  return {
    state,
    dispatch,
    toggleFavorite,
    setSelectedPhoto
  };
};
export default useApplicationData;