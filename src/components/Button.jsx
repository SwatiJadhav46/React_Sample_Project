import React from 'react';

const Button = props => {
  return (
    //JSX element
    <button className={ props.btnClass }
      type={ props.type }
      name={ props.name }
      onClick={ props.handleOnClick }
      > { props.text } </button>
  );
};

export default Button;
