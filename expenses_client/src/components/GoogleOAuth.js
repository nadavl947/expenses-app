import React from 'react';
import {connect} from 'react-redux';
import {SignInAction, SignOutAction} from '../actions'

class GoogleOAuth extends React.Component{

  componentDidMount(){
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '138300882484-jerm1ar2piss7leqj0lchv9dq9lt64l2.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get())
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    })
  }

  onAuthChange = (isSignedIn) => {
    if(isSignedIn === true) {
      this.props.SignInAction(this.auth.currentUser.get().getId(), this.auth.currentUser.get().w3.U3);
    } else {
      this.props.SignOutAction();
    }
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut()
    localStorage.removeItem('userId')
    window.location.reload();
  }

  renderAuthButton(){
    if(this.props.isSignedIn === null){
      return null
    } else if(this.props.isSignedIn === true){
      return (
        <button onClick={this.onSignOutClick} style={{backgroundColor: 'rgb(255, 51, 0)', fontWeight: 'bold', padding: '5px 10px', color: 'white'}}>Sign Out</button>
      )
    } else {
      return (
        <button onClick={this.onSignInClick} style={{backgroundColor: 'rgb(0, 230, 0)', fontWeight: 'bold', padding: '5px 10px', color: 'white'}}>Sign In With Google</button>
      )
    }
  }

  render(){
    return(
      <div>
        {this.renderAuthButton()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    isSignedIn: state.auth.isSignedIn
  }
}
export default connect(mapStateToProps, {SignInAction, SignOutAction})(GoogleOAuth);
