import React from "react";
import "./Story.scss";
import StoryItem from "./StoryItem";

const Story = () => {
  return (
    <>
      <div className="story">
        <StoryItem
          img={"https://picsum.photos/200/300?random=60"}
          name={"rahuldholakia"}
        />
        <StoryItem
          img={"https://picsum.photos/200/300?random=61"}
          name={"nehadhupia"}
        />
        <StoryItem
          img={"https://picsum.photos/200/300?random=62"}
          name={"shahrukhkhan"}
        />
        <StoryItem
          img={"https://picsum.photos/200/300?random=63"}
          name={"salmankhan"}
        />
        <StoryItem
          img={"https://picsum.photos/200/300?random=64"}
          name={"hritthikroshan"}
        />
      </div>
    </>
  );
};

export default Story;
