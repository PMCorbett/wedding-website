// @flow
import React from 'react';
import styled from 'styled-components';
import { Heading, Pane } from 'evergreen-ui';
import { NavLink } from 'react-router-dom';
import logo from './logo.jpg';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const PageHeader = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex: none;
  padding: 1rem 2rem;
  width: 100%;
`;

export const Title = styled.div`
  margin-left: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const PageFooter = styled.div`
  flex: none;
  width: 100%;
  background: #eee;
  padding: 3rem;
  box-sizing: border-box;
`;

export const PageContent = styled.div`
  flex: 1 0 auto;
  padding: 1.5rem 3rem;
`;

const Logo = styled.img`
  height: 180px;
`;

type Props = {
  children: React$Element<*> | Array<React$Element<*>>,
};

const PageLink = styled(NavLink).attrs({ activeClassName: 'nav-active' })`
  color: #095534;
  text-decoration: none;
  padding: 12px;
  margin: 12px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #095534;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #0a8851;
    border-bottom-color: #0a8851;
  }

  &.nav-active {
    color: #0a8851;
    border-bottom-color: #0a8851;
    font-weight: bold;
  }
`;

function Page({ children }: Props) {
  return (
    <PageWrapper>
      <PageHeader>
        <Logo src={logo} />
        <Title>
          <Heading margin="default" size={800}>
            Patrick & Graces Wedding
          </Heading>
          <Heading>10th August 2019</Heading>
        </Title>
      </PageHeader>
      <Pane display="flex" alignItems="center" justifyContent="center">
        <PageLink to="/" exact>
          Home
        </PageLink>
        <PageLink to="/rsvp">RSVP</PageLink>
        <PageLink to="/service">The Service</PageLink>
        <PageLink to="/reception">Reception</PageLink>
        <PageLink to="/information">Useful Information</PageLink>
      </Pane>
      <PageContent>{children}</PageContent>
    </PageWrapper>
  );
}

export default Page;
