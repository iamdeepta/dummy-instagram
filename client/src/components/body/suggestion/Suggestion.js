import React from "react";
import "./Suggestion.scss";

const Suggestion = () => {
  return (
    <>
      <div className="suggestion">
        <div className="suggestion_left">
          <img src="https://picsum.photos/200/300?random=90" alt="people" />
          <p>anannyapandey</p>
        </div>
        <p>Follow</p>
      </div>
    </>
  );
};

export default Suggestion;
