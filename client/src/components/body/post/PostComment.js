import React from "react";
import "./PostComment.scss";

const PostComment = ({ name, comment }) => {
  return (
    <>
      <div className="comment">
        <p>
          {name} <span>{comment}</span>
        </p>
      </div>
    </>
  );
};

export default PostComment;
