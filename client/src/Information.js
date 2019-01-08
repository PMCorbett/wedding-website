// @flow
import React from 'react';
import { Pane, Paragraph, Heading, Link } from 'evergreen-ui';

function Information() {
  return (
    <Pane display="flex" alignItems="center">
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
      <Pane />
    </Pane>
  );
}

export default Information;
