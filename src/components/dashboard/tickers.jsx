import {React, useEffect, useState} from "react";

import DeltaArrow from '../../components/dashboard/arrow';


import '../../styling/tickers.css';

function Tickers() 
{
    // initialize index tickers
    const [SPYprice, setSPY] = useState(0);
    const [QQQprice, setQQQ] = useState(0);
    const [DJIprice, setDJI] = useState(0);

    // initialize percent change
    const [SPYdelta, setSPYdelta] = useState(0);
    const [QQQdelta, setQQQdelta] = useState(0);
    const [DJIdelta, setDJIdelta] = useState(0);

    // populate tickers via API calls
    useEffect(()=> 
    {


    });

    return(
        // container
        <div className="tickers-component">
            <div className="tickers-index">
                <h3>SPY</h3>

                <div className="tickers-index-price">
                    <div className="tickers-index-price-arrow">
                        ^
                    </div>

                    <div className="tickers-index-price-value">
                        <p>{SPYprice.toFixed(2)}</p>
                        <p>{SPYdelta.toFixed(2)}%</p>
                    </div>
                </div>

                
            </div>

            <div className="tickers-index">
                <h3>QQQ</h3>
                <p>{QQQprice.toFixed(2)}</p>
                <p>{QQQdelta.toFixed(2)}%</p>
            </div>

            <div className="tickers-index">
                <h3>DJI</h3>
                <p>{DJIprice.toFixed(2)}</p>
                <p>{DJIdelta.toFixed(2)}%</p>
            </div>


            
        </div>

    );


}

export default Tickers;