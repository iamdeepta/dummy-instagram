import React from "react";
import "./Post.scss";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FiSend, FiSmile } from "react-icons/fi";
import { RiBookmarkLine } from "react-icons/ri";
import PostComment from "./PostComment";

const Post = () => {
  return (
    <>
      <div className="post">
        <div className="post_header">
          <div className="post_header_left">
            <img src="https://picsum.photos/200/300?random=67" alt="user" />
            <p>deepikapadukone</p>
          </div>
          <FiMoreHorizontal className="post_header_right_icon" />
        </div>

        <div className="post_body">
          <img src="https://picsum.photos/200/300?random=60" alt="post" />

          <div className="post_body_likes">
            <div className="post_body_likes_left">
              <AiOutlineHeart className="post_body_like_icon" />
              <FaRegComment className="post_body_like_icon" />
              <FiSend className="post_body_like_icon" />
            </div>
            <div className="post_body_likes_right">
              <RiBookmarkLine className="post_body_bookmark_icon" />
            </div>
          </div>

          <div className="post_body_contents">
            <h6>1200 likes</h6>
            <h4>
              deepikapadukone{" "}
              <span>Surprise hey there I am deepika padukone</span>
            </h4>
            <PostComment name={"radhidevlukia"} comment={"Can't wait!"} />
            <PostComment name={"tarekfaiyaz"} comment={"This is amazing!"} />

            <p className="post_body_time">2 DAYS AGO</p>
          </div>

          <div className="post_body_input">
            <div className="post_body_input_left">
              <FiSmile className="post_body_input_icon" />
              <input type="text" placeholder="Add a comment..." />
            </div>
            <p>Post</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
