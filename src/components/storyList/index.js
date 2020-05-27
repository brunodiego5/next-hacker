import React from "react";
import Link from "next/link";

import * as Styled from "./styles";

function StoryList({ stories }) {
  return (
    <Styled.StoryList>
      {stories.map((story) => (
        <Styled.Story key={story.id}>
          <Styled.StoryTitle>
            <a href={story.url}>{story.title}</a>
          </Styled.StoryTitle>

          <Styled.StoryDetails>
            <span>{story.points || 0} points</span>
            <Link href={`/story?id=${story.id}`}>
              <a>{story.comments_count || 0} comments</a>
            </Link>
          </Styled.StoryDetails>
        </Styled.Story>
      ))}
    </Styled.StoryList>
  );
}

export default StoryList;
