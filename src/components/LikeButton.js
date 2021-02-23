import { React, useState } from "react";

function LikeButton() {
  const initial_situation = false;
  const [press, set_press] = useState(initial_situation);

  const pressButton = () => {
    set_press(!press);
  };

  return (
    <div>
      <button onClick={pressButton}>
        {press ? "Hide message" : "Show message"}
      </button>
      {press ? <h2>"You have liked this, click to unlike"</h2> : null}
    </div>
  );
}
export default LikeButton;
