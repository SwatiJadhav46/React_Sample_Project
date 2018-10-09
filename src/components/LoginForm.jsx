import React from 'react';
import Input from './Input.jsx';
import Button from './Button.jsx';
import Label from './Label.jsx';

const LoginForm = props => {
  return(
      <div className="container col-5 bg-light login-form">
        <form onSubmit={ props.handleOnSubmit }>
          <div className="form-group row"></div>
          <div className="form-group row"></div>
          <div className="form-group row">
            <span layout="column" className="col-sm-2"></span>
            <span layout="column" className="col-sm-2"><Label text="Email " /></span>
            <span layout="column" className="col-sm-6">
              <Input inputType="text"
                name="email"
                handleOnChange={ props.handleOnChange } />
            </span>
          </div>

          <div className="form-group row">
            <span layout="column" className="col-sm-2"></span>
            <span layout="column" className="col-sm-2"><Label text="Password "/></span>
            <span layout="column" className="col-sm-6">
              <Input inputType="password"
                name="password"
                handleOnChange={ props.handleOnChange } />
            </span>
          </div>

          <div className="form-group row ">
            <span layout="column" className="col-sm-4"></span>
            <span layout="column" className="col-sm-2">
              <Button text="Cancel"
                type="reset"
                name="cancel"
                btnClass="btn"
                handleOnClick={ props.handleOnCancel }/>&nbsp;
            </span>
            <span layout="column" className="col-sm-2">
              <Button text="Submit"
                btnClass="btn btn-success"
                type="submit"
                name="submit" />
            </span>
          </div>
        </form>
      </div>
  );
};

export default LoginForm;
