import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';


class FacebookAuth extends Component {
    state={
        isLoggedIn: false,
        userID: '',
        name: '',
        email:'',
        picture:''

    }

    componentClicked = () => {

    }

    responseFacebook = (response) => {
        console.log(response)
    }

    render() {
        let fbContent;



        if(this.state.isLoggedIn)
        {
            fbContent = null;
        }
        else
        {
            fbContent = (
                <FacebookLogin
                    appId="****************"
                    autoLoad={true}
                    fields="name,email,picture"
                    cssClass="ui blue button"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} />
            );
        }

        return (
            <div>
                {fbContent}
            </div>
        );
    }
}

export default FacebookAuth;