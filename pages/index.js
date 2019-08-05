import React from "react";
import styled from "styled-components";
import Link from "next/link";

const A = styled.a`
  padding: 5px 10px;
  margin: 10px;
  cursor: pointer;
  color: white;
  background: green;
`;

const App = () => {
  return (
    <div>
      <Link href="/page1">
        <A>Page 1</A>
      </Link>
      <Link href="/page2">
        <A>Page 2 </A>
      </Link>
    </div>
  );
};

export default App;
