import React from 'react';

const ActionButton = props => {
  return (
    //JSX element
    <button className={ props.btnClass }
      type={ props.type }
      name={ props.name }
      onClick={ (event) => {
        props.handleOnClick(event, props.index)
      } }
      > { props.text } </button>
  );
};

export default ActionButton;
