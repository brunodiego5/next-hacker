import styled from "styled-components";

export const Main = styled.main`
  padding: 1em;
`;

export const Title = styled.div`
  font-size: 1.2rem;
  margin: 0;
  font-weight: 300;
  padding-bottom: 0.5em;

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
  padding-bottom: 1em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 1em;

  strong {
    margin-right: 1em;
  }

  a {
    color: #f60;
  }
`;
