// @flow
import React from 'react';
import styled from 'styled-components';
import { Pane, Paragraph, Heading } from 'evergreen-ui';
import { Link } from 'react-router-dom';
import badgersmount from './badgersmount.jpg';

const Image = styled.img`
  max-height: 360px;
  flex-basis: 40%;
  margin: 24px 0;
  max-width: 50%;
`;

const InfoLink = styled(Link)`
  color: #095534;
`;

function Reception() {
  return (
    <Pane display="flex" alignItems="center" justifyContent="space-between">
      <Pane marginRight={24}>
        <Paragraph>
          Celebrations will follow at Badgers Mount hotel in Elmesthorpe.
        </Paragraph>
        <Paragraph>Evening guests can arrive from 6.30pm</Paragraph>
        <Heading marginTop={24}>Need a place to stay?</Heading>
        <Paragraph>
          There are rooms available at Badgers Mount, to book you will need to
          phone directly on 01455 818161
        </Paragraph>
        <Paragraph>
          If you&apos;d like to stay somewhere else,{' '}
          <InfoLink to="/information">Take a look</InfoLink> at our suggestions
        </Paragraph>
      </Pane>
      <Image src={badgersmount} />
    </Pane>
  );
}

export default Reception;
