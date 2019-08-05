import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Title = styled.h1`
  color: blue;
`;

const PageTwo = () => {
  return (
    <div>
      <Title>Page 2</Title>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
};

export default PageTwo;
