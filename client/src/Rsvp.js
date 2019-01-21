// @flow
import React, { Component } from 'react';
import {
  Pane,
  Button,
  RadioGroup,
  TextInputField,
  Alert,
  toaster,
} from 'evergreen-ui';

type Props = {};

type State = {
  attendees: string,
  accepts: 'indeterminate' | 'accept' | 'decline',
  number: number,
  dietaryRequirements: string,
  declineReason: string,
  loading: boolean,
  sent: boolean,
  failed: boolean,
};

class Rsvp extends Component<Props, State> {
  state = {
    attendees: '',
    accepts: 'indeterminate',
    number: 0,
    dietaryRequirements: '',
    declineReason: '',
    loading: false,
    sent: false,
    failed: false,
  };

  updateText = (stateField: string) => (
    event: SyntheticInputEvent<HTMLInputElement>
  ) => {
    this.setState({ [stateField]: event.target.value });
  };

  updateNumber = (stateField: string) => (
    event: SyntheticInputEvent<HTMLInputElement>
  ) => {
    this.setState({ [stateField]: +event.target.value });
  };

  updateRadio = (stateField: string) => (value: 'accept' | 'decline') => {
    this.setState({ [stateField]: value });
  };

  submitForm = () => {
    const {
      attendees,
      accepts,
      number,
      dietaryRequirements,
      declineReason,
    } = this.state;

    if (attendees === '' || accepts === 'indeterminate') {
      toaster.warning('Please let us know who is attending');

      return;
    }

    if (accepts === 'accept' && number === 0) {
      toaster.warning('Please let us know how many people are attending');

      return;
    }

    this.setState({ loading: true });

    fetch('/api/rsvp', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({
        attendees,
        accepts,
        number,
        dietaryRequirements,
        declineReason,
      }),
    })
      .then(() => {
        this.setState({
          loading: false,
          sent: true,
          attendees: '',
          accepts: 'indeterminate',
          number: 0,
          dietaryRequirements: '',
          declineReason: '',
        });
      })
      .catch(() => {
        this.setState({ loading: false, failed: true });
      });
  };

  render() {
    const {
      attendees,
      accepts,
      number,
      dietaryRequirements,
      declineReason,
      loading,
      failed,
      sent,
    } = this.state;

    const options = [
      { label: 'Yes', value: 'accept' },
      { label: 'No', value: 'decline' },
    ];

    return (
      <Pane width={600} maxWidth="90vw">
        {failed && (
          <Alert
            intent="danger"
            title="There was a problem sending the email, sozzies."
          />
        )}
        {sent && (
          <Alert
            marginBottom={24}
            intent="success"
            title="Thanks for letting us know."
          />
        )}
        <Pane>
          <TextInputField
            onChange={this.updateText('attendees')}
            value={attendees}
            required
            label="Name of attendees"
          />
        </Pane>
        <Pane>
          <RadioGroup
            label="Will you be attending?"
            value={accepts}
            options={options}
            onChange={this.updateRadio('accepts')}
          />
        </Pane>
        {accepts === 'accept' && (
          <Pane>
            <Pane>
              <TextInputField
                onChange={this.updateNumber('number')}
                value={number}
                label="Number of people attending"
                type="number"
                required
              />
            </Pane>
            <Pane>
              <TextInputField
                onChange={this.updateText('dietaryRequirements')}
                value={dietaryRequirements}
                label="Any special dietary requirements?"
              />
            </Pane>
          </Pane>
        )}
        {accepts === 'decline' && (
          <Pane>
            <TextInputField
              onChange={this.updateText('declineReason')}
              value={declineReason}
              label="We're sorry to hear that, please let us know why you can't make it"
            />
          </Pane>
        )}
        <Pane>
          <Button
            isLoading={loading}
            onClick={this.submitForm}
            intent="success"
          >
            Send RSVP
          </Button>
        </Pane>
      </Pane>
    );
  }
}

export default Rsvp;
