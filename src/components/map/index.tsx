import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import GoogleMapReact from "google-map-react";
import mapMarker from "../../assets/misc/marker_icon.svg";
import { MAP_API_KEY } from "../../config";

// const API = MAP_API_KEY;

const MapWrapper: AnyStyledComponent = styled.div`
  border-radius: 15px;
  height: 400px;
  width: 400px;
  margin: 0 0 0 50px;
  overflow: hidden;
`;

const Marker: AnyStyledComponent = styled.img`
  min-height: 100px;
  min-width: 100px;
  position: relative;
  left: -50px;
  top: -70px;
`;

type MarkerProps = {
  lat: number;
  lng: number;
};

const MapMarker: React.FC<MarkerProps> = (): JSX.Element => {
  return (
    <a href="https://g.page/SushiAimanchester?share">
      <Marker src={mapMarker} alt="Map marker" />
    </a>
  );
};

type MapProps = {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
};

const Map: React.FC<MapProps> = (props): JSX.Element => {
  const { center, zoom } = props;

  return (
    <MapWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: MAP_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <MapMarker lat={center.lat} lng={center.lng} />
      </GoogleMapReact>
    </MapWrapper>
  );
};

export { Map };
