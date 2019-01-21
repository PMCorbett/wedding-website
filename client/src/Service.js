// @flow
import React from 'react';
import styled from 'styled-components';
import { Pane, Paragraph } from 'evergreen-ui';
import church from './church.jpg';

const Image = styled.img`
  max-height: 360px;
  flex-basis: 1 0 40%;
  margin: 24px 0;
  max-width: 100%;
`;

function Service() {
  return (
    <Pane
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexWrap="wrap"
      width="100%"
    >
      <Pane marginRight={24}>
        <Paragraph>
          The service will be held at St Mary&apos;s church in Hinckley at
          1.30pm
        </Paragraph>
      </Pane>
      <Image src={church} />
    </Pane>
  );
}

export default Service;
