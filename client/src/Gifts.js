// @flow
import React from 'react';
import { Pane, Paragraph, Heading, Link } from 'evergreen-ui';

function Gifts() {
  return (
    <Pane>
      <Pane>
        <Heading size={600} margin="default">
          Gifts
        </Heading>
        <Paragraph>
          As we&apos;ve had one house for time now we have most of the
          essentials; so rather than presents we are requesting donations
          towards home rennovation projects.
        </Paragraph>
      </Pane>
      <Pane>
        <Heading margin="default">Tree removal</Heading>
        <Paragraph>
          We have many large conifer trees at the bottom of our garden and would
          like to get them removed and replace them with a nice fence, as they
          block far too much light.
        </Paragraph>
        <Paragraph>
          If you want to help us get to the root of this problem{' '}
          <Link>donate here</Link>.
        </Paragraph>
      </Pane>
      <Pane>
        <Heading margin="default">Patio & Driveway</Heading>
        <Paragraph>
          Both the patio and the driveway have seen better days, and we&apos;d
          like to replace them with new slabs.
        </Paragraph>
        <Paragraph>
          If you&apos;ve got the drive to help with this project,{' '}
          <Link>donate here</Link>.
        </Paragraph>
      </Pane>
      <Pane>
        <Heading margin="default">New Settees</Heading>
        <Paragraph>
          We have some hand me down settees that are beginning to collapse, they
          could do with replacing.
        </Paragraph>
        <Paragraph>
          If you want to set us both up comfortably, <Link>donate here</Link>.
        </Paragraph>
      </Pane>
    </Pane>
  );
}

export default Gifts;
