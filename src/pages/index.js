import React from "react";
import fetch from "isomorphic-fetch";
import Error from "next/error";

import StoryList from "../components/storyList";

function Index({ stories }) {
  if (stories.length === 0) {
    return <Error statusCode={503} />;
  }

  return <StoryList stories={stories} />;
}

Index.getInitialProps = async () => {
  let stories;

  try {
    const response = await fetch(
      "https://node-hnapi.herokuapp.com/news?page=1 "
    );
    stories = await response.json();
  } catch (error) {
    stories = [];
  }

  return {
    stories,
    title: "Hacker Next",
    description: "A Hacker News clone made with Next.js",
  };
};

export default Index;
