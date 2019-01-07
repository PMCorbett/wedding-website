// @flow
import React from 'react';
import styled from 'styled-components';
import { Pane, Paragraph } from 'evergreen-ui';
import growl from './growl.jpg';

const Image = styled.img`
  height: 200px;
`;

function IndexPage() {
  return (
    <Pane>
      <Pane display="flex" alignItems="center" justifyContent="space-between">
        <Pane>
          <Paragraph>
            Sue & Stuart Campton kindly request you company at the marriage of
            their daughter Grace Mary to Patrick Michael Andrew Corbett
          </Paragraph>
          <Paragraph>Saturday 10th August 2019</Paragraph>
          <Paragraph>St Mary&apos;s Church, Hinckley at 1.30pm</Paragraph>
          <Paragraph>
            Celebrations to follow at the Badgers Mount Hotel, Elmesthorpe
          </Paragraph>
        </Pane>
        <Pane>
          <Image src={growl} />
        </Pane>
      </Pane>
    </Pane>
  );
}

export default IndexPage;
