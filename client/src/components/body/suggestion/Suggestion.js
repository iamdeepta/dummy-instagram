import React from "react";
import "./Suggestion.scss";

const Suggestion = ({ suggestion }) => {
  return (
    <>
      <div className="suggestion">
        <div className="suggestion_left">
          <img src={suggestion.profile_picture} alt="people" />
          <p>{suggestion.username}</p>
        </div>
        <p>Follow</p>
      </div>
    </>
  );
};

export default Suggestion;
