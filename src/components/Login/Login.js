import React from 'react';
import Button from '../Button/Button';

function Login({ logIn }) {

    return (
        <React.Fragment>
            <div className="wrapper">
                <div className="loginBlock">
                    <input id="login" className="loginInput" placeholder="Name" type="text" />
                    <Button text="login" handlerClick={ logIn } type="button" classes="loginLink" />
                    {/* <a href="/posts" className="btn loginLInk" handlerClick={ logIn } >Login</a> */}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login;