import React from 'react';
import {connect} from 'react-redux';
import GoogleOAuth from '../GoogleOAuth.js';

class LogInForm extends React.Component{

  saveUserId = () => {
    localStorage.setItem('userId', this.props.auth.userId)
    window.location.href = 'http://localhost:3000/Expenses';
  }

  confirmBtn = () => {
    if(this.props.auth.userEmail !== null){
      return(
        <button className="confirmBtn" onClick={this.saveUserId}>Confirm</button>
      )
    }
  }

  createAcountBtn = () => {
    window.gapi.auth2.getAuthInstance().signOut();
    localStorage.removeItem('userId')
    window.location.href = 'http://localhost:3000/CreateAcountPage'
  }

  render(){
    return(
      <div className="LogInForm">
        <div className="loginTitle">
          <h2>LOGIN</h2>
        </div>
        <div className="logInBox">
          <h5>Current User:</h5>
          <p>{this.props.auth.userEmail}</p>
          <ul>
            <li>{this.confirmBtn()}</li>
            <li><GoogleOAuth/></li>
          </ul>
          <button onClick={this.createAcountBtn} className="createAcountBtn">Create New Acount</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    auth: state.auth
  }
}

export default connect(mapStateToProps)(LogInForm);
