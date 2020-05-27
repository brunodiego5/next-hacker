import React from "react";
import fetch from "isomorphic-fetch";
import Error from "next/error";

import StoryList from "../components/storyList";
import Footer from "../components/footer";

function Index({ page, stories }) {
  if (stories.length === 0) {
    return <Error statusCode={503} />;
  }

  return (
    <>
      <StoryList stories={stories} />
      <Footer page={page} />
    </>
  );
}

Index.getInitialProps = async ({ req, res, query }) => {
  let stories;
  let page;

  try {
    page = Number(query.page) || 1;
    const response = await fetch(
      `https://node-hnapi.herokuapp.com/news?page=${page}`
    );
    stories = await response.json();
  } catch (error) {
    stories = [];
  }

  return {
    page,
    stories,
    title: "Hacker Next",
    description: "A Hacker News clone made with Next.js",
  };
};

export default Index;
