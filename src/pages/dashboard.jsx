import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

import Tickers from "../components/dashboard/tickers";
import PortfolioValue from "../components/dashboard/portfolioValue";

import '../styling/dash.css';

function Dashboard() 
{
    // left container
        // stocks
        // options
        // crypto

    // right container
        // portfolio value
        // tickers
        return(
        <>
            <div className="dashboard-rightContainer">

                <PortfolioValue/>

                <Tickers/>
            </div>
        </>
            );
        
        // graph
            
}

export default Dashboard;