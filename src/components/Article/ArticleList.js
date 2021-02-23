import React, { useState, useEffect } from "react";
import Timeout from "await-timeout";
import axios from "axios";
import ArticleCard from "./ArticleCard";

function ArticleList() {
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

  useEffect(() => {
    async function waitForATimer() {
      console.log("A");
      await Timeout.set(2000); // time in milliseconds!
      console.log("B");
    }
    waitForATimer();
  }, []);

  const cardButton = () => {
    set_articles(articles);
  };

  return (
    <div>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      <button style={{ color: "Red" }} onClick={cardButton}>
        Clear notifications
      </button>{" "}
      <br />
      {articles.map((ar, index) => {
        return (
          <ArticleCard key={index} id={ar.id} title={ar.title} body={ar.body} />
        );
      })}
    </div>
  );
}
export default ArticleList;
