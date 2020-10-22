import React, { useEffect } from 'react';
import Button from '../Button/Button';
import PropTypes from "prop-types";

function Login() {

    function auth() {
        const loginInput = document.getElementById("login"),
              passwrodInput = document.getElementById('password'),
              login = loginInput.value,
              password = passwrodInput.value;

        if(localStorage.getItem(login)) {
            if(JSON.parse(localStorage.getItem(login)).password === password) {
                console.log('correct password')
            } else {
                console.log('wrong password')
            }
        } else {
            console.log(false)
        }
    }

    return (
        <React.Fragment>
            <div className="wrapper">
                <div className="authBlock">
                    <div className="inputsBlock">
                        <input id="login" className="authInput" placeholder="Name" type="text" />
                        <input id="password" className="authInput" placeholder="password" type="text" />
                    </div>
                    <a href="/posts" className="btn loginLInk" onClick={ auth } >Login</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login;