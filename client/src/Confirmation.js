// @flow
import React from 'react';
import { Button } from 'evergreen-ui';

type Props = {
  uuid: string,
  clearFormData: () => void,
};

function Confirmation({ uuid, clearFormData }: Props) {
  return (
    <div>
      MyComponent {uuid} <Button onClick={clearFormData}>CLEAR</Button>
    </div>
  );
}

export default Confirmation;
