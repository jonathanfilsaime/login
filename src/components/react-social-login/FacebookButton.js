import React, {Component} from 'react';
import SocialLogin from './SocialLogin';
import SignOutFb from './SignOutFb'

class FacebookButton extends Component {

    state = {
        logged: false,
        user: {},
        currentProvider: ''
    }

    instance = {}

    setNodeRef = (provider) => {

        if (provider) {

            this.instance = provider
        }
    }

    onLoginSuccess = (user) => {
        console.log(user)

        this.setState({
            logged: true,
            currentProvider: user._provider,
            user
        })
    }

    onLoginFailure = (err) => {
        console.error(err)

        console.log(this)

        this.setState({
            logged: false,
            currentProvider: '',
            user: {}
        })
    }

    onLogoutSuccess = () => {
        this.setState({
            logged: false,
            currentProvider: '',
            user: {}
        })
    }

    onLogoutFailure = (err) => {
        console.error(err)
    }

    logout = () => {
        const { logged, currentProvider } = this.state


        console.log("this.nodes: ", this.instance)

        if (logged && currentProvider) {

            this.onLogoutSuccess()
            this.instance.props.triggerLogout()

        }
    }

    render() {

        let children

        console.log( this.state.logged)

        if (this.state.logged) {
            children = (
                <SignOutFb>
                    Sign out
                </SignOutFb>
            )
        } else {
            children = (
                <SocialLogin
                    provider='facebook'
                    appId="339754106747665"
                    onLoginSuccess={this.onLoginSuccess}
                    onLoginFailure={this.onLoginFailure}
                    onLogoutSuccess={this.onLogoutSuccess}
                    getInstance={this.setNodeRef(this)}
                    key={'facebook'}
                >
                    Login with Facebook
                </SocialLogin>
            )
        }

        return children;
    }
}

export default FacebookButton;