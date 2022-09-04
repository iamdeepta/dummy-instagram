import React from "react";
import "./Body.scss";
import Post from "./post/Post";
import Story from "./story/Story";
import Suggestion from "./suggestion/Suggestion";

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
        <div className="body_right">
          <div className="body_right_profile">
            <div className="body_right_profile_image">
              <img src="https://picsum.photos/200/300?random=1" alt="profile" />
              <div className="body_right_profile_name">
                <h6>deepta</h6>
                <p>Deepta</p>
              </div>
            </div>
            <p>Switch</p>
          </div>

          <div className="body_right_people">
            <div className="body_right_people_header">
              <h6>Suggestions For You</h6>
              <p>See All</p>
            </div>

            <Suggestion />
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
