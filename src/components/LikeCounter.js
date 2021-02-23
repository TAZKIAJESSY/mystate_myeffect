import { React, useState, useEffect } from "react";

function LikeCounter() {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes);
  //console.log("A render!");

  useEffect(() => {
    //console.log("The useEffect action!");
  }, [numLikes]);

  //console.log("what are these?", numkies, set_numkies); return An array, the first item is a number, the second item is a function

  const increment = () => {
    console.log("Yes, clicked!Current number of likes", numLikes);
    set_numLikes(numLikes + 1);
  };

  const justReset = () => {
    set_numLikes(initial_numLikes);
  };

  return (
    <div style={{ margin: 40 }}>
      <p style={{ color: "violet" }}>
        This post has <b>{numLikes}</b> likes!
        <button onClick={increment}>Press Here for Like</button>
        <button onClick={justReset}>Reset</button>
      </p>
    </div>
  );
}

export default LikeCounter;
