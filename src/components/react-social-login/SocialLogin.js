import React from 'react'
import SocialLogin from 'react-social-login'



const Button = ({ children, triggerLogin, triggerLogout, ...props }) => (
    <button className="ui blue facebook button" onClick={triggerLogin} {...props}>
        { children }
    </button>
)

export default SocialLogin(Button)