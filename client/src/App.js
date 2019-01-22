// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import { Pane, Heading, CornerDialog } from 'evergreen-ui';
import Routes from './Routes';
import logo from './logo.jpg';
import bruges from './bruges.jpg';

type Props = {};

const PageLink = styled(NavLink).attrs({ activeClassName: 'nav-active' })`
  color: #095534;
  text-decoration: none;
  padding: 6px;
  transition: all 0.3s ease-in-out;
  font-size: 12px;

  &:hover {
    color: #0a8851;
  }

  &.nav-active {
    color: #0a8851;
    font-weight: bold;
  }
`;

const Logo = styled.img`
  height: 180px;
`;

const BackgroundDiv = styled(Pane).attrs({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundImage: `url(${bruges})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
})`
  height: 500px;
  background-position: center -100px;

  @media (max-width: 800px) {
    height: 300px;
    background-position: center center;
  }
`;

// eslint-disable-next-line react/prefer-stateless-function
class App extends PureComponent<Props> {
  render() {
    return (
      <Router>
        <Route
          path="/"
          render={() => (
            <Pane>
              <Pane
                position="sticky"
                top={0}
                display="flex"
                justifyContent="center"
                background="#fff"
              >
                <Pane
                  display="flex"
                  alignItems="center"
                  justifyContent="space-around"
                  height={65}
                  width={800}
                  maxWidth="100%"
                >
                  <PageLink to="/" exact>
                    Home
                  </PageLink>
                  <PageLink to="/rsvp">RSVP</PageLink>
                  <PageLink to="/service">Service</PageLink>
                  <PageLink to="/reception">Reception</PageLink>
                  <PageLink to="/information">Information</PageLink>
                  <PageLink to="/gifts">Gifts</PageLink>
                </Pane>
              </Pane>
              <Pane>
                <BackgroundDiv>
                  <Heading color="#fff" margin="default" size={800}>
                    Patrick & Graces Wedding
                  </Heading>
                  <Heading color="#fff">10th August 2019</Heading>
                </BackgroundDiv>
                <Pane
                  display="flex"
                  flexWrap="wrap"
                  width="100%"
                  paddingLeft={12}
                  paddingRight={12}
                  paddingTop={12}
                  paddingBottom={192}
                >
                  <Pane marginRight={24}>
                    <Logo src={logo} />
                  </Pane>
                  <Pane marginTop={24}>
                    <Routes />
                  </Pane>
                </Pane>
                <Route
                  path="/:subpath?"
                  render={({ match, history }) => (
                    <CornerDialog
                      title="RSVP"
                      isShown={
                        match.params.subpath !== 'rsvp' &&
                        match.params.subpath !== 'information'
                      }
                      intent="success"
                      onConfirm={() => history.push('/rsvp')}
                      onCloseComplete={() => {}}
                      confirmLabel="RSVP Now"
                      containerProps={{ maxWidth: '90%' }}
                    >
                      Please RSVP as soon as you can
                    </CornerDialog>
                  )}
                />
              </Pane>
            </Pane>
          )}
        />
      </Router>
    );
  }
}

export default App;
