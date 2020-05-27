import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: #f6f6ef;

  nav {
    background: #f60;
    padding: 1em;
  }

  nav > * {
    display: inline-block;
    color: black;
  }

  nav a {
    text-decoration: none;
  }
`;

export const MainTitle = styled.span`
  font-weight: bold;
`;
