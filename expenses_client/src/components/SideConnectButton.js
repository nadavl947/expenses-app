import React from 'react';
import { SocialIcon } from 'react-social-icons';

class SideConnectButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      width: '35px',
      height: '35px'
    }
  }
  onMouseOver = () => {
      this.setState({
        width: '175px',
      })
    }
      onMouseLeave = () => {
        this.setState({
          width: '35px',
        })
      }
  render(){
    var totalStyle = {
      width: this.state.width,
      height: this.state.height
    }
    return(
      <div className="sideSocialMedia" onMouseEnter={this.onMouseOver} onMouseLeave={this.onMouseLeave} style={totalStyle}>
        <div className="visibel">
          <SocialIcon label="Our portfolio" style={{ height: 35, width: 35 }}/>
        </div>
        <div className="hidden">
          <SocialIcon url="http://linkedin.com/in/jaketrent" style={{ height: 35, width: 35 }}/>
          <SocialIcon url="http://github.com/in/jaketrent" bgColor="green" style={{ height: 35, width: 35 }}/>
          <SocialIcon url="http://facebook.com/in/jaketrent" style={{ height: 35, width: 35 }}/>
          <SocialIcon url="http://email.com/in/jaketrent" style={{ height: 35, width: 35 }}/>
        </div>
      </div>
    )
  }
}
export default SideConnectButton;
