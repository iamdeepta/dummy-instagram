import React, { useState, useEffect } from "react";
import "./Story.scss";
import StoryItem from "./StoryItem";
import api from "../../../api/baseurl";

const Story = () => {
  const [story, setStory] = useState([]);

  //retrieve stories
  const getUsers = async () => {
    const response = await api.get("stories");
    return response.data;
  };

  useEffect(() => {
    const getAllUsers = async () => {
      const allusers = await getUsers();

      if (allusers) {
        setStory(allusers);
      }
    };

    getAllUsers();
  }, []);

  return (
    <>
      <div className="story">
        {story.map((stories) => {
          return (
            <StoryItem
              img={stories.profile_picture}
              name={stories.username}
              key={stories.username}
            />
          );
        })}
      </div>
    </>
  );
};

export default Story;
