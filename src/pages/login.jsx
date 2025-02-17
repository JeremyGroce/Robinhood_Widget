import React from "react";
import {Link} from "react-router-dom";
import logo_github from "../../public/git.png";



import '../styling/log.css';

function Login ()
{
    return(
        <div className="login-page">

            {/* credentials, and call to the API to login */}
            <div className="login-component">
                
                <h1>Login</h1>

                {/* Holds the username and password */}
                <div className="login-component-credentialsBox">

                    {/* username */}
                    <input
                    type="text"
                    placeholder="Username"/>

                    {/* just a line between username and password */}
                    <div className="login-component-credentialsBox-lineBreak">
                    </div>

                    {/* password */}
                    <input
                    type="password"
                    placeholder="Password"/>

                </div>

                {/* Button for submitting username and password to route */}
                <div className="login-component-submitLogin">
                    <Link to= "/dashboard">
                        <button
                            className="login-component-submitLogin-btn"
                        >
                            <p>Log In</p>
                        </button>
                    </Link>
                </div>


            </div>

            <div className="github">
                <a href="https://github.com/JeremyGroce/Robinhood_Widget" target="_blank" rel="noopener noreferrer">
                    <img src={logo_github} height="80" width="80"/>
                </a>
            </div>

        </div>

    )
}

export default Login;