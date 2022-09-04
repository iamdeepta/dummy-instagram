import React from "react";
import "./StoryItem.scss";

const StoryItem = ({ img, name }) => {
  return (
    <>
      <div className="story_item">
        <img src={img} alt="story" />
        <p>{name}</p>
      </div>
    </>
  );
};

export default StoryItem;
