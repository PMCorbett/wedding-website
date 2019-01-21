// @flow
import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import IndexPage from './IndexPage';
import Rsvp from './Rsvp';
import Service from './Service';
import Reception from './Reception';
import Information from './Information';
import Gifts from './Gifts';

type Props = {};
type State = {};

// eslint-disable-next-line react/prefer-stateless-function
class Routes extends Component<Props, State> {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/rsvp" component={Rsvp} />
        <Route path="/service" component={Service} />
        <Route path="/reception" component={Reception} />
        <Route path="/information" component={Information} />
        <Route path="/gifts" component={Gifts} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
