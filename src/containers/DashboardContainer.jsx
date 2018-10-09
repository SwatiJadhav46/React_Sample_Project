import React, {Component} from 'react';
import Dashboard from '../components/Dashboard.jsx';
import {get} from '../apis/apiHelper.js';
import { connect } from 'react-redux';
import { fetchEmails } from '../actionCreators/emailActionCreator.js';

class DashboardContainer extends Component {
  state = {
    emailList: [ ],
    email: {
      subject: 'Subject 3',
      details: 'Details 3'
    }
  }

  componentDidMount() {
    this.props.fetchEmails()
  }

  handleOnShow = (event, index) => {
    this.setState({email: this.props.emailList[index]});
    console.log("showing data", this.state.email);
  }

  render() {
    return(
      <Dashboard handleOnLogOut={ this.handleOnLogOut }
        emails={ this.props.emailList }
        handleOnShow={ this.handleOnShow }
        email={ this.state.email }/>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("-->>>>>", state)
  return state.emailReducer
}

export default connect(
  mapStateToProps,
  { fetchEmails: fetchEmails }
)(DashboardContainer);
