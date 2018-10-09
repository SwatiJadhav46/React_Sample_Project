import React from 'react';
import Label from './Label.jsx';
import ActionButton from './ActionButton.jsx';

const SingleEmailDetail = props => {
  return(
      <tr>
        <td><Label text={props.email.subject}/></td>
        <td className="center"><ActionButton text="Show"
          btnClass="btn btn-success"
          handleOnClick={props.handleOnShow}
          index={props.index} />
        </td>
      </tr>
  );
};

export default SingleEmailDetail;
