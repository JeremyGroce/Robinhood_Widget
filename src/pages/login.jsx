import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import logo_github from "../../public/git.png";



import '../styling/log.css';

function Login ()
{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // handle login requests
    const handleLogin = async (e) => 
    {
        e.preventDefault();

        // POST request
        try
        {
            const response = await axios.post("http://localhost:5000/login", 
                {
                    username: username,
                    password: password,
                });
        } catch(error) {
            console.error(error);
        }

        // reset input boxes post-submit
        setUsername("");
        setPassword("");
                
    };

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
                        placeholder="Username"
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                    />

                    {/* just a line between username and password */}
                    <div className="login-component-credentialsBox-lineBreak">
                    </div>

                    {/* password */}
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />

                </div>

                {/* Button for submitting username and password to route */}
                <div className="login-component-submitLogin">
                    <Link to= "/dashboard">
                        <button
                            className="login-component-submitLogin-btn"
                            onClick={handleLogin}
                        >
                            <p>Log In</p>
                        </button>
                    </Link>
                </div>


            </div>

            <div className="github">
                <a href="https://github.com/JeremyGroce/Robinhood_Widget" target="_blank" rel="noopener noreferrer">
                    <img src={logo_github} height="60" width="60"/>
                </a>
            </div>

        </div>

    )
}

export default Login;