import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

import Tickers from "../components/dashboard/tickers";
import PortfolioValue from "../components/dashboard/portfolioValue";
import LineChart from "../components/dashboard/lineGraph";

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
        <div className="dashboard-page">

            <div className="dashboard-leftContainer">
                left container
                <p>open positions</p>
            </div>
            <div className="dashboard-rightContainer">

                <PortfolioValue/>

                <Tickers/>

                <p><LineChart/></p>
            </div>
        </div>
            );
        
        // graph
            
}

export default Dashboard;