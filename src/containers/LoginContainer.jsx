import React from 'react';
import LoginForm from '../components/LoginForm.jsx';
import DashboardContainer from './DashboardContainer.jsx';

class LoginContainer extends React.Component{
  state = {
    email: null,
    password: null,
    isSubmitted: false,
    isValid: false,
    errors: {
      email: null,
      password: null
    }
  };

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }, () => {
      console.log(this.state.email, this.state.password)
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.setState({isSubmitted: true}, () => {
      console.log(this.state)
    })
  }

  handleOnCancel = () => {
    this.setState({email: null, password: null});
  }

  render() {
    if(this.state.isSubmitted){
      return (
        <DashboardContainer />
      )
    } else {
      return (
        <LoginForm handleOnChange={ this.handleOnChange }
         handleOnSubmit={ this.handleOnSubmit }
         handleOnCancel={ this.handleOnCancel }/>
      );
    }
  };
}


export default LoginContainer;
