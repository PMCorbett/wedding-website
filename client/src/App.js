// @flow
import * as R from 'ramda';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import saveForm from './helpers/saveForm';
import IndexPage from './IndexPage';
import Confirmation from './Confirmation';

type State = {
  formData: Object,
};

const unsetValues = (keyMatch) =>
  R.mapObjIndexed((value, key) => {
    if (key.search(keyMatch) === 0) {
      return undefined;
    }

    return value;
  });

const unsetLevelThree = unsetValues('level3-');
const unsetParticipantsAgeCustom = unsetValues('participantsAgeOther');

const unsetLocations = R.compose(
  unsetValues('locationOther'),
  unsetValues('languagesOther'),
  unsetValues('city')
);

const unsetCollidingValues = (formData, data) =>
  R.cond([
    [R.has('facebook2'), R.always(unsetLevelThree)],
    [R.has('participantsAge'), R.always(unsetParticipantsAgeCustom)],
    [R.has('location'), R.always(unsetLocations)],
    [R.T, R.always(R.identity)],
  ])(data)(formData);

const getNewData = (formData, data) => ({
  ...unsetCollidingValues(formData, data),
  ...data,
});

class App extends Component<*, State> {
  constructor(props: *) {
    super(props);

    const formData = JSON.parse(window.localStorage.getItem('formData')) || {};

    this.state = {
      formData,
    };
  }

  updateFormData = (data: Object) => {
    this.setState(
      ({ formData }) => ({
        formData: getNewData(formData, data),
      }),
      this.saveForm
    );
  };

  saveForm = () => {
    const { formData } = this.state;

    saveForm(formData);
  };

  clearFormData = () => {
    window.localStorage.setItem('formData', JSON.stringify({}));

    this.setState({ formData: {} });
  };

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={IndexPage} />
          <Route
            path="/confirmation/:uuid"
            exact
            render={({ match }) => (
              <Confirmation
                uuid={match.params.uuid}
                clearFormData={this.clearFormData}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
