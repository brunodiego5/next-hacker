import React from "react";
import fetch from "isomorphic-fetch";
import Error from "next/error";

import StoryMain from "../../components/story";

function Story({ story }) {
  if (!story) {
    return <Error statusCode={503} />;
  }

  return <StoryMain story={story} />;
}

Story.getInitialProps = async ({ req, res, query }) => {
  let story;
  try {
    const storyId = query.id;
    const response = await fetch(
      `https://node-hnapi.herokuapp.com/item/${storyId}`
    );
    story = await response.json();
    const { title } = story;

    return { story, title, backButton: true };
  } catch (error) {
    console.log(error);
    story = null;
  }
};

export default Story;
