import React from 'react';

import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigationBar = ({ favoriteCount, topicData }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicData={topicData} />
      <FavBadge favoriteCount={favoriteCount} />
    </div>
 );
};


export default TopNavigationBar;