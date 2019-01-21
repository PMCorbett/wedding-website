// @flow
import React from 'react';
import { Pane, Paragraph } from 'evergreen-ui';

function IndexPage() {
  return (
    <Pane display="flex" alignItems="center" justifyContent="space-between">
      <Pane textAlign="center">
        <Paragraph margin="default">
          Sue & Stuart Campton kindly request you company at the marriage of
          their daughter Grace Mary to Patrick Michael Andrew Corbett
        </Paragraph>
        <Paragraph margin="default">Saturday 10th August 2019</Paragraph>
        <Paragraph margin="default">
          St Mary&apos;s Church, Hinckley at 1.30pm
        </Paragraph>
        <Paragraph margin="default">
          Celebrations to follow at the Badgers Mount Hotel, Elmesthorpe
        </Paragraph>
      </Pane>
    </Pane>
  );
}

export default IndexPage;
