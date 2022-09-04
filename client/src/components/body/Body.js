import React from "react";
import "./Body.scss";
import Post from "./post/Post";
import Story from "./story/Story";

const Body = () => {
  return (
    <>
      <div className="body">
        <div className="body_left">
          <Story />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <div className="body_right"></div>
      </div>
    </>
  );
};

export default Body;
