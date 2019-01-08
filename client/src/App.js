// @flow
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Page from './Page';
import IndexPage from './IndexPage';
import Rsvp from './Rsvp';
import Service from './Service';
import Reception from './Reception';
import Information from './Information';

function App() {
  return (
    <Router>
      <Page>
        <Route path="/" exact component={IndexPage} />
        <Route path="/rsvp" exact component={Rsvp} />
        <Route path="/service" exact component={Service} />
        <Route path="/reception" exact component={Reception} />
        <Route path="/information" exact component={Information} />
      </Page>
    </Router>
  );
}

export default App;
