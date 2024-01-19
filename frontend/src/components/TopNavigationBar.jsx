import React from 'react';

import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigationBar = ({ favoriteCount, topicData, onTopicSelect }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
       {/* Topic list component, receives topicData and a callback for topic selection */}
      <TopicList topicData={topicData} onTopicSelect={onTopicSelect} />
       {/* FavBadge component */}
      <FavBadge isFavPhotoExist={favoriteCount > 0} />
    </div>
  );
};


export default TopNavigationBar;