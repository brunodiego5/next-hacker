export const Container = styled.div``;

import styled from "styled-components";

export const Comment = styled.div`
  margin-bottom: 1.5em;
`;

export const CommentUser = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 0.5em;
`;

export const CommentContent = styled.div`
  font-size: 0.9rem;

  p {
    margin: 0;
    margin-bottom: 0.5em;
    word-wrap: break-word;
  }

  a {
    color: #f60;
    text-decoration: underline;
  }

  pre {
    max-width: 100%;
    overflow: scroll;
  }
`;

export const NestedComments = styled.div`
  margin-top: 1em;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  padding-left: 1em;
`;
