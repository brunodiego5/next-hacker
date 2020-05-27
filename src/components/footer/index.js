import React from "react";
import Link from "next/link";

import * as Styled from "./styles";

function Footer({ page }) {
  return (
    <Styled.Footer>
      <Link href={`/?page=${page + 1}`}>
        <a>Next Page ({page + 1})</a>
      </Link>
    </Styled.Footer>
  );
}

export default Footer;
