import React from 'react';
import SingleEmailDetail from './SingleEmailDetail.jsx';

const EmailList = props => {
  return (
    <table className="table table-hover">
      <thead>
        <th className="center">Subject</th>
        <th className="center">Action</th>
      </thead>
      <tbody>
        {
          props.emails.map((email, index) => {
            return (
              <SingleEmailDetail key={index} email={email} handleOnShow={props.handleOnShow} index={index} />
            )
          })
        }
      </tbody>
    </table>
  );
};

export default EmailList;
