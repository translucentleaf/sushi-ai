import React from "react";
import styled from "styled-components";

const About = styled.main`
  color: #fff;
`;

const AboutPage: React.FC = (): JSX.Element => {
  return (
    <About>
      <h1>About Page</h1>
    </About>
  );
};

export { AboutPage };
