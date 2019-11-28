import React from "react";
import styled from "styled-components";

const MapWrapper = styled.div`
  background: #fff;
  border-radius: 15px;
  height: 400px;
  width: 400px;
  margin: 0 0 0 50px;
`;

const Map: React.FC = (): JSX.Element => {
  return <MapWrapper>Hi</MapWrapper>;
};

export { Map };
