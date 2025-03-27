import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

import HamburgerMenu from "../components/dashboard/menu";

import Tickers from "../components/dashboard/tickers";
import PortfolioValue from "../components/dashboard/portfolioValue";
import LineChart from "../components/dashboard/lineGraph";



import '../styling/dash.css';

function Dashboard() 
{
    // graph title (will be default Portfolio)
    const [chartTitle, setChartTitle] = useState("Portfolio");


    

        return(
        <div className="dashboard-page">

            {/* Top Container */}
            <div className="dashboard-topContainer">
                <HamburgerMenu/>

            </div>

            {/* Left Container*/}
            <div className="dashboard-leftContainer">
                left container
                <p>open positions</p>
            </div>

            {/* Right Container */}
            <div className="dashboard-rightContainer">

                <PortfolioValue currentValue = {setChartTitle}/>

                <Tickers currentTicker={setChartTitle}/>

                <p><LineChart chartTitle={chartTitle}/></p>
            </div>
        </div>
            );
        
        // graph
            
}

export default Dashboard;