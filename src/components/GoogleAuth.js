import React from 'react';

class GoogleAuth extends React.Component
{
    state = {
        isSignedIn: null,
        userId: null
    };

    componentDidMount()
    {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:'*************',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn : this.auth.isSignedIn.get(), userId: this.auth.currentUser.get().getId() })
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        });
    }

    onAuthChange = () => {
        console.log(this.state.userId)
        this.setState({isSignedIn: this.auth.isSignedIn.get(), userId: this.auth.currentUser.get().getId()});
    };

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutCLick = () => {
        this.setState({userId: null })
        this.auth.signOut();
    }

    renderAuthButton()
    {
        if(this.state.isSignedIn == null)
        {
            return null;
        }
        else if (this.state.isSignedIn)
        {
            return (
                <button onClick={this.onSignOutCLick} className="ui red google button">
                    <i className="google icon"/>
                    Sign out
                </button>
            );
        }
        else
        {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon"/>
                    Sign in with google
                </button>
            )
        }
    }

    render()
    {
        return <div>{this.renderAuthButton()}</div>
    }
}

export default GoogleAuth;

