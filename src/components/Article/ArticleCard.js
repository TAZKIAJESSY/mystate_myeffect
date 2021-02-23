import React from "react";

function ArticleCard(props) {
  return (
    <div
      style={{
        maxWidth: 500,
        borderWidth: 2,
        borderColor: "white",
        borderStyle: "solid",
        margin: 10,
      }}
    >
      <h1>{props.id}</h1>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  );
}
export default ArticleCard;
