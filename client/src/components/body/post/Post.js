import React from "react";
import "./Post.scss";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FiSend, FiSmile } from "react-icons/fi";
import { RiBookmarkLine } from "react-icons/ri";
import PostComment from "./PostComment";

const Post = ({ post }) => {
  let today_date = new Date().getTime();

  let day_diff = (today_date - Number(post.posted_on)) / (1000 * 3600 * 24);

  return (
    <>
      <div className="post">
        <div className="post_header">
          <div className="post_header_left">
            <img src={post.user.profile_picture} alt="user" />
            <p>{post.user.username}</p>
          </div>
          <FiMoreHorizontal className="post_header_right_icon" />
        </div>

        <div className="post_body">
          <img src={post.image} alt="post" />

          <div className="post_body_likes">
            <div className="post_body_likes_left">
              {post.liked ? (
                <>
                  <AiFillHeart className="post_body_like_icon fill_heart" />
                </>
              ) : (
                <>
                  <AiOutlineHeart className="post_body_like_icon" />
                </>
              )}

              <FaRegComment className="post_body_like_icon" />
              <FiSend className="post_body_like_icon" />
            </div>
            <div className="post_body_likes_right">
              <RiBookmarkLine className="post_body_bookmark_icon" />
            </div>
          </div>

          <div className="post_body_contents">
            <h6>{post.likes} likes</h6>
            <h4>
              {post.user.username}
              <span>{post.text}</span>
            </h4>

            {post.comments.map((comment) => {
              return (
                <PostComment
                  name={comment.user.username}
                  comment={comment.text}
                  key={comment.id}
                />
              );
            })}

            <p className="post_body_time">
              {day_diff < 1
                ? Math.round(day_diff * 24) === 0
                  ? `${Math.round(day_diff * 24 * 60)} MINUTES AGO`
                  : `${Math.round(day_diff * 24)} HOURS AGO`
                : `${Math.round(day_diff)} DAYS AGO`}
            </p>
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
