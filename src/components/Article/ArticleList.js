import React, { useState, useEffect } from "react";
import Timeout from "await-timeout";
import axios from "axios";
import ArticleCard from "./ArticleCard";

function ArticleList() {
  //const [articles, set_articles] = useState([]);

  const [articles, set_articles] = useState([
    {
      id: 1,
      title: "What is React all about?",
      body:
        "React is all about one-way data flow, the Virtual DOM, and transpiling JSX.",
    },
    {
      id: 2,
      title: "A lovely kid",
      body: "In fact, a kid is also the name of a baby goat!",
    },
    {
      id: 3,
      title: "On placeholder image URLs",
      body:
        "So yeah, you won't be able to look these images up. They're placeholders",
    },
  ]);

  // useEffect(() => {
  //   async function doSomeDataFetching() {
  //     console.log("I'm gonna fetch some data!");
  //     await Timeout.set(2000); // time in milliseconds!
  //     console.log("Got back:");
  //     const response = await axios.get(
  //       "https://jsonplaceholder.typicode.com/posts?_limit=5"
  //     );
  //     // console.log(response);
  //     // console.log("Articles fetched");
  //     set_articles(response.data);
  //   }
  //   doSomeDataFetching();
  // }, []);

  // console.log("WHAT IS ARTICLES?", articles);

  // our goal => fetch an array of articles and display them.
  // fetch some data => axios.
  // Something to trigger this request => useEffect
  //    => trigger after the component is mounted
  // Some state to store this data.

  // if (articles.length) {
  //   return <div>Loading...</div>;
  // }

  const [pressed, setpressed] = useState(true);

  const cardButton = () => {
    setpressed(!pressed);
  };

  return (
    <div>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      <button style={{ color: "Red" }} onClick={cardButton}>
        Clear notifications
      </button>{" "}
      <br />
      {pressed
        ? articles.map((ar, index) => {
            return (
              <ArticleCard
                key={index}
                id={ar.id}
                title={ar.title}
                body={ar.body}
              />
            );
          })
        : null}
    </div>
  );
}
export default ArticleList;
