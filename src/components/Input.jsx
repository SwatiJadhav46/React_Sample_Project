import React from 'react';

const Input = props => {
  return (
    //JSX element
    <input className="form-control"
      type={ props.inputType }
      name={ props.name }
      onChange={ props.handleOnChange }
      required/>
  );
};

export default Input;
