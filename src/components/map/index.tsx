import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { MAP_API_KEY } from "../../config";

const MapWrapper: AnyStyledComponent = styled.iframe`
  border-radius: 15px;
  height: 400px;
  width: 400px;
  margin: 0 0 0 50px;
  overflow: hidden;

  @media (max-width: 1000px) {
    height: 300px;
    width: 300px;
    margin: 0;
  }

  @media (max-width: 700px) {
    height: 600px;
    width: 300px;
    margin: 0;
  }
`;

const Map: React.FC = (): JSX.Element => {
  const source = `https://www.google.com/maps/embed/v1/place?key=${MAP_API_KEY}
  &q=place_id:ChIJyYVPNonT2IcR-3CSGoEcbvQ&`;

  return (
    <MapWrapper title="map" frameBorder="0" src={source} allowFullScreen />
  );
};

export { Map };
