import React, { useState, useEffect } from "react";
import "./Body.scss";
import Post from "./post/Post";
import Story from "./story/Story";
import Suggestion from "./suggestion/Suggestion";
import api from "../../api/baseurl";

const Body = () => {
  const [suggestions, setSuggestions] = useState([]);

  const [posts, setPosts] = useState([]);

  //retrieve user suggestions
  const getUsers = async () => {
    const response = await api.get("user_suggestions");
    return response.data;
  };

  useEffect(() => {
    const getAllUsers = async () => {
      const allusers = await getUsers();

      if (allusers) {
        setSuggestions(allusers);
      }
    };

    getAllUsers();
  }, []);

  //retrieve posts
  const getPosts = async () => {
    const response = await api.get("posts");
    return response.data;
  };

  useEffect(() => {
    const getAllPosts = async () => {
      const allposts = await getPosts();

      if (allposts) {
        setPosts(allposts);
      }
    };

    getAllPosts();
  }, []);

  return (
    <>
      <div className="body">
        <div className="body_left">
          <Story />

          {posts.map((post) => {
            return <Post post={post} key={post.id} />;
          })}
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
            {suggestions.map((suggestion) => {
              return (
                <Suggestion key={suggestion.username} suggestion={suggestion} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
