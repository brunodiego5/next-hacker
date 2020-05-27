import React from "react";

import * as Styled from "./styles";

function Story({ story }) {
  return (
    <Styled.Main>
      <Styled.Title>
        <a href={story.url}>{story.title}</a>
        <Styled.StoryDetails>
          <strong>{story.points} points</strong>
          <strong>{story.comments_count} comments</strong>
          <strong>{story.time_ago}</strong>
        </Styled.StoryDetails>
      </Styled.Title>
    </Styled.Main>
  );
}

export default Story;
