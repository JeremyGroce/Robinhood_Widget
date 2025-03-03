import {React, useEffect, useState} from "react";
import Arrow from '../../components/dashboard/arrow';


import '../../styling/tickers.css';

function Tickers({currentTicker}) 
{
    // initialize index tickers
    const [SPYprice, setSPY] = useState(0);
    const [QQQprice, setQQQ] = useState(0);
    const [DIAprice, setDJI] = useState(0);

    // initialize percent change
    const [SPYdelta, setSPYdelta] = useState(0);
    const [QQQdelta, setQQQdelta] = useState(0);
    const [DIAdelta, setDJIdelta] = useState(0);

    // populate tickers via API calls
    useEffect(()=> 
    {


    });

    return(
        // container
        // row
        <div className="tickers-component">

            {/* SPY index */}
            <div className="tickers-index"
                 onClick={()=> currentTicker("SPY")}>

                <div className="tickers-index-name">
                    <h3>SPY</h3>
                </div>

                <div className="tickers-index-price">
                    <p>{SPYprice.toFixed(2)}</p>
                </div>

                <div className="tickers-index-delta">
                    <p>{SPYdelta.toFixed(2)}%</p>
                </div>
                
                <div className="tickers-index-deltaArrow">
                    <Arrow value={SPYdelta}/>
                </div>
            
            </div>

            {/* QQQ index */}
            <div className="tickers-index"
                 onClick={()=> currentTicker("QQQ")}>

                <div className="tickers-index-name">
                    <h3>QQQ</h3>
                </div>

                <div className="tickers-index-price">
                    <p>{QQQprice.toFixed(2)}</p>
                </div>

                <div className="tickers-index-delta">
                    <p>{QQQdelta.toFixed(2)}%</p>
                </div>
                
                <div className="tickers-index-deltaArrow">
                    <Arrow value={QQQdelta}/>
                </div>
            </div>

            <div className="tickers-index"
                 onClick={()=>currentTicker("DIA")}>

                <div className="tickers-index-name">
                    <h3>DIA</h3>
                </div>

                <div className="tickers-index-price">
                    <p>{DIAprice.toFixed(2)}</p>
                </div>

                <div className="tickers-index-delta">
                    <p>{DIAdelta.toFixed(2)}%</p>
                </div>
                
                <div className="tickers-index-deltaArrow">
                    <Arrow value={DIAdelta}/>
                </div>
            </div>


        </div>

    );


}

export default Tickers;