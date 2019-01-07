// @flow
import React from 'react';
import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const PageHeader = styled.div`
  align-items: center;
  background-size: cover;
  background: #555;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex: none;
  padding: 1rem 2rem;
  width: 100%;
`;

export const Title = styled.div`
  margin-left: 2rem;
`;

export const Heading = styled.div`
  font-size: 2rem;
  margin: 0.2rem 0;
`;

export const SubHeading = styled.div`
  font-size: 1.2rem;
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

type Props = {
  children: React$Element<*> | Array<React$Element<*>>,
  buttons: React$Element<*> | Array<React$Element<*>>,
};

function Page({ children, buttons }: Props) {
  return (
    <PageWrapper>
      <PageHeader>
        <Title>
          <Heading>Talking Heads</Heading>
          <SubHeading>By CrowdLab</SubHeading>
        </Title>
      </PageHeader>
      <PageContent>{children}</PageContent>
      <PageFooter>{buttons}</PageFooter>
    </PageWrapper>
  );
}

export default Page;
