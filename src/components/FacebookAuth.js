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
        this.setState({isLoggedIn: true})
    }

    render() {
        let fbContent;

        console.log("is log in ", this.state.isLoggedIn)

        if(this.state.isLoggedIn)
        {
            fbContent = (
                <button className="ui blue facebook button">
                    Sign out
                </button>
            );
        }
        else
        {
            fbContent = (
                <FacebookLogin
                    appId="339754106747665"
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