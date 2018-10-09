import React from 'react';
import Label from './Label.jsx';

const EmailDetails = props => {
  return (
    <div>
      <Label text={props.email.body} />
    </div>
  );
};

export default EmailDetails;
