import React from "react";

import CommentList from "../commentList";

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

      {story.comments.length > 0 ? (
        <CommentList comments={story.comments} />
      ) : (
        <div>No comments for this story</div>
      )}
    </Styled.Main>
  );
}

export default Story;
