import React from "react";
import TopicListItem from "./TopicListItem";
import useApplicationData from '../hooks/useApplicationData';

import "../styles/TopicList.scss";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

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
