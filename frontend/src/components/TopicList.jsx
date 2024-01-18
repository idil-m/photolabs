import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";



const TopicList = ({ topicData, onTopicSelect }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topicData.map(topic => (
        <TopicListItem key={topic.id} label={topic.title} onClick={() => onTopicSelect(topic.id)} />
      ))}
    </div>
  );
};


export default TopicList;
