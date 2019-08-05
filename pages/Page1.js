import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Title = styled.h1`
  color: red;
`;

const PageOne = () => {
  return (
    <div>
      <Title>Page 1</Title>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
};

export default PageOne;
