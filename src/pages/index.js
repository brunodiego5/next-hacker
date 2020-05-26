import React from "react";
import fetch from "isomorphic-fetch";
import Error from "next/error";

function Index({ stories }) {
  if (stories.length === 0) {
    return <Error statusCode={503} />;
  }

  return (
    <div>
      <h1>hacker next</h1>
      <div>
        {stories.map((story) => (
          <h2 key={story.id}>{story.title}</h2>
        ))}
      </div>
    </div>
  );
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

  return { stories };
};

export default Index;
