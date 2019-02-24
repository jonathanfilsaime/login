import React from 'react';
import GoogleAuth from "./GoogleAuth";
import FacebookAuth from "./FacebookAuth";
import FacebookButton from './react-social-login/FacebookButton'
import './LoginCard.css'


class LoginCard extends React.Component{



    render(){
      return (
          <div className="ui middle aligned center aligned grid">
              <div className="column">
                  <div className="ui raised very padded text container segment">
                      <h2 className="ui image header">
                          <div className="content">
                              Log-in to your account
                          </div>
                      </h2>
                      <GoogleAuth/>
                      <br/>
                      {/*<FacebookAuth/>*/}
                      <FacebookButton/>
                  </div>
              </div>
          </div>

      );
    }

}

export default LoginCard