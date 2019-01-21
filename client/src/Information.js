// @flow
import React from 'react';
import styled from 'styled-components';
import { Pane, Paragraph, Heading, Link } from 'evergreen-ui';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const MapWrapper = styled.div`
  width: 500px;
  height: 350px;
  max-width: 90vw;

  .leaflet-container {
    height: 400px;
    width: 100%;
  }
`;

function Information() {
  const churchPosition = [52.5402, -1.3719];
  const badgersPosition = [52.5603, -1.3105];

  const centerPosition = [
    (churchPosition[0] + badgersPosition[0]) / 2,
    (churchPosition[1] + badgersPosition[1]) / 2,
  ];

  const zoom = 12;

  return (
    <Pane>
      <Pane>
        <Heading size={600}>Places to stay</Heading>
        <Heading margin="default">Badgers Mount</Heading>
        <Paragraph>
          There are rooms available at Badgers Mount, to book you will need to
          phone the venue directly on 01455 818161.
        </Paragraph>
        <Heading margin="default">Premier Inn</Heading>
        <Paragraph>
          There is a Premier Inn in Hinckley, you can{' '}
          <Link href="https://www.premierinn.com/gb/en/hotels/england/leicestershire/hinckley/hinckley.html">
            book on their website
          </Link>
        </Paragraph>
      </Pane>
      <Pane marginTop={24}>
        <MapWrapper>
          <Map center={centerPosition} zoom={zoom}>
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={churchPosition}>
              <Popup>
                St Mary&apos;s Church
                <br />
                Service starts at 1.30pm 10th August 2019
              </Popup>
            </Marker>
            <Marker position={badgersPosition}>
              <Popup>Badgers Mount Hotel</Popup>
            </Marker>
          </Map>
        </MapWrapper>
      </Pane>
    </Pane>
  );
}

export default Information;
