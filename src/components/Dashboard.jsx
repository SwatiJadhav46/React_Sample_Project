import React from 'react';
import EmailList from './EmailList.jsx';
import EmailDetails from './EmailDetails.jsx';

const Dashboard = props => {
  return(
    <div>
      <div layout="row">
        <span layout="column" className="col-6 center"><h3> Dashboard </h3></span>
      </div>
      <div>
        <EmailList emails={props.emails} handleOnShow={props.handleOnShow}/>
      </div>
      <div className="center">
        <EmailDetails email={props.email}/>
      </div>
    </div>
  )
}

export default Dashboard;
