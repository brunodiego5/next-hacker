import React from "react";
import Link from "next/link";
import Head from "next/head";
import Router from "next/router";

import * as Styled from "./styles";

function Layout({ children, title, description, backButton }) {
  return (
    <Styled.Container>
      <Head>
        <title>{title || "Hacker Next"}</title>
        <meta name="description" content={description || ""} />
      </Head>
      <nav>
        {backButton && (
          <Styled.BackButton onClick={() => Router.back()}>
            &#x2b05;
          </Styled.BackButton>
        )}
        <Link href="/">
          <a>
            <Styled.MainTitle>Hacker Next</Styled.MainTitle>
          </a>
        </Link>
      </nav>

      {children}
    </Styled.Container>
  );
}

export default Layout;
