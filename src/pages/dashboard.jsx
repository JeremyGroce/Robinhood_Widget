import React from "react";
import {Link} from "react-router-dom";

function Dashboard() 
{

    return(
        <div className="dashboard-page">
            <h1>dashboard</h1>
            <Link to="/">Go To Login</Link>
        </div>
    )
}

export default Dashboard;