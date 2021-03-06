import styled from "styled-components";

export const StoryList = styled.div`
  padding: 0 1em;
`;
export const Story = styled.div`
  padding: 1em 0;
`;
export const StoryTitle = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  margin-bottom: 0.5em;

  a {
    color: #333;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
export const StoryDetails = styled.div`
  font-size: 0.8rem;
  font-weight: bold;

  span {
    margin-right: 1em;
  }

  a {
    color: #6600ff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
