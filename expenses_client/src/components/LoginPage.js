import React from 'react';
import LogInForm from './LogInPage/LogInForm.js'

class LoginPage extends React.Component{
  render(){
    return(
      <div className="loginPage">
        <div className="logInText">
          <h1>My Expenses App!</h1>
          <h4>
            Track your Expenses And Incomes! <br/>
            Use the Ease-To-Read statistics to plan your budjet for upcoming month!<br/>
            Find all you need to Track tou Incomes And Expenses in one App!
          </h4>
        </div>
        <div>
          <LogInForm/>
        </div>
      </div>
    )
  }
}
export default LoginPage;
