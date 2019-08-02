import React from 'react';
import {connect} from 'react-redux';
import GoogleOAuth from './GoogleOAuth.js'

class CreateAcountPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      first_name: '',
      last_name: ''
    }
  }
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

  onFormSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:4000/createUser?first_name=${JSON.stringify(this.state.first_name)}&last_name=${JSON.stringify(this.state.last_name)}&user_email=${JSON.stringify(this.props.auth.userEmail)}&user_id=${JSON.stringify(this.props.auth.userId)}`)
    .then(response => response.json())
    .catch(err => console.error(err))
  }
  render(){
    return (
      <div className="loginPage">
        <div className="logInText">
          <h1>My Expenses App!</h1>
          <h4>
            Track your Expenses And Incomes! <br/>
            Use the Ease-To-Read statistics to plan your budjet for upcoming month!<br/>
            Find all you need to Track tou Incomes And Expenses in one App!
          </h4>
        </div>
        <div className="LogInForm">
          <div className="loginTitle">
            <h2>Create New Acount</h2>
          </div>
          <div className="createNewAcountBox">
            <form onSubmit={this.onFormSubmit}>
              <label>First Name:</label><br/>
              <input type="text" value={this.state.first_name} onChange={(event) => this.setState({first_name: event.target.value})}/><br/>
              <label>Last Name:</label><br/>
              <input type="text" value={this.state.last_name} onChange={(event) => this.setState({last_name: event.target.value})}/>
              <GoogleOAuth/>
              <p>{this.props.auth.userEmail}</p>
              {this.confirmBtn()}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(CreateAcountPage);
