// @flow
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Page from './Page';
import IndexPage from './IndexPage';
import Rsvp from './Rsvp';

function App() {
  return (
    <Router>
      <Page>
        <Route path="/" exact component={IndexPage} />
        <Route path="/rsvp" exact component={Rsvp} />
      </Page>
    </Router>
  );
}

export default App;
