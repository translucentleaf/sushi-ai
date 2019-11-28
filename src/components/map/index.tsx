import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import GoogleMapReact from "google-map-react";
import mapMarker from "../../assets/misc/marker_icon.svg";

const MapWrapper: AnyStyledComponent = styled.div`
  border-radius: 15px;
  height: 400px;
  width: 400px;
  margin: 0 0 0 50px;
  overflow: hidden;
`;

const Marker: AnyStyledComponent = styled.div`
  display: flex;
  min-height: 100px;
  min-width: 100px;
  justify-content: center;
  align-items: center;
`;

type MarkerProps = {
  lat: number;
  lng: number;
};

const MapMarker: React.FC<MarkerProps> = (): JSX.Element => {
  return (
    <Marker>
      <img src={mapMarker} alt="Map marker" />
    </Marker>
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
        bootstrapURLKeys={{ key: "AIzaSyDHXwICMhZERaGH_5g9qaG9bAW5bgF8Tug" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <MapMarker lat={center.lat} lng={center.lng} />
      </GoogleMapReact>
    </MapWrapper>
  );
};

export { Map };
