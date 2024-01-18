import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = ({ label, onClick }) => {
  return (
    <button className="topic-list-item" onClick={onClick}>
      {label}
    </button>
  );
};

export default TopicListItem;
