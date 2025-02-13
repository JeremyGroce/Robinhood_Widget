import React from "react";
import {Link} from "react-router-dom";

import '../styling/log.css';

function Login ()
{
    return(
        <div className="login-page">
            <h1>login page</h1>
            <Link to= "/dashboard">Go to Dashboard</Link>
        </div>
    )
}

export default Login;