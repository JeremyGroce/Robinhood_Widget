import {React, useEffect, useState} from "react";
import Arrow from '../../components/dashboard/arrow';
import axios from "axios";

import '../../styling/tickers.css';

function Tickers({currentTicker}) 
{

    // initialize index tickers
    const [SPYprice, setSPY] = useState(0);
    const [QQQprice, setQQQ] = useState(0);
    const [DIAprice, setDIA] = useState(0);

    // initialize percent change
    const [SPYdelta, setSPYdelta] = useState(0);
    const [QQQdelta, setQQQdelta] = useState(0);
    const [DIAdelta, setDIAdelta] = useState(0);


    // populate tickers and daily deltas via API calls
    useEffect(()=> 
    {
        // SPY
        axios.get('http://localhost:5000/stocks/SPY')
        .then((response) => 
        {
            const value = Number(response.data.value);
            const delta = Number(response.data.delta);
            setSPY(value);
            setSPYdelta(delta);
        })
        .catch(error=> 
        {
            console.log("|Bad Response: ", error);
        }
        )

        // setDelta = 

        // QQQ
        axios.get('http://localhost:5000/stocks/QQQ')
        .then((response) => 
        {
            const value = Number(response.data.value);
            const delta = response.data.delta;
            setQQQ(value+15);
            setQQQdelta(delta-2);
        })
        .catch(error=> 
        {
            console.log("|Bad Response: ", error);
        }
        )

        // DIA
        axios.get('http://localhost:5000/stocks/DIA')
        .then((response) => 
        {
            const value = Number(response.data.value);
            const delta = response.data.delta;
            setDIA(value-20);
            setDIAdelta(delta-.75);
        })
        .catch(error=> 
        {
            console.log("|Bad Response: ", error);
        }
        )



    },[]);

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

                <div 
                    className="tickers-index-price"
                    style = {{color: SPYdelta>=0 ? "#32d20a": "red"}}
                >                    
                    <p>{SPYprice.toFixed(2)}</p>
                </div>

                <div 
                    className="tickers-index-delta"
                    style = {{color: SPYdelta>=0 ? "#32d20a": "red"}}
                >  
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

                <div 
                    className="tickers-index-price"
                    style = {{color: QQQdelta>=0 ? "#32d20a": "red"}}    
                >
                    <p>{QQQprice.toFixed(2)}</p>
                </div>

                <div 
                    className="tickers-index-delta"
                    style = {{color: QQQdelta>=0 ? "#32d20a": "red"}
                }
                >
                    <p>{QQQdelta.toFixed(2)}%</p>
                </div>
                
                <div className="tickers-index-deltaArrow">
                    <Arrow value={QQQdelta}/>
                </div>
            </div>

            {/* DIA index */}
            <div className="tickers-index"
                 onClick={()=>currentTicker("DIA")}>

                <div className="tickers-index-name">
                    <h3>DIA</h3>
                </div>

                <div 
                    className="tickers-index-price"
                    style = {{color: DIAdelta>=0 ? "#32d20a": red}}
                >
                    <p>{DIAprice.toFixed(2)}</p>
                </div>

                <div 
                    className="tickers-index-delta"
                    style = {{color: DIAdelta>=0 ? "#32d20a": red}}
                >
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