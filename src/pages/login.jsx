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
                
                </div>

                {/* Button for submitting username and password to route */}
                <div className="login-component-submitLogin">
                    <button
                        className="login-component-submitLogin-btn"
                    >
                        <p>Log In</p>

                    </button>
                </div>

            </div>
            {/* <img src={logo_github} height="100" width="100"/> */}
            {/* <Link to= "/dashboard">Go to Dashboard</Link> */}
        </div>
    )
}

export default Login;