import {React, useState} from "react";

import '../../styling/portfolioValue.css';

function PortfolioValue ({currentValue}) 
{
    // portfolio value; portfolio daily delta change
    const [testValue, setTestValue] = useState(0);
    const [testDelta, setTestDelta] = useState(0);

    return(
        <div className={`portfolioValue-component ${testDelta >= 0 ? "positive" : "negative"}`}
             onClick={()=>currentValue("Portfolio")}>
            
            <div className="portfolioValue-component-values"> 
                <p>${testValue.toFixed(2)}</p>
                
                {testDelta.toFixed(2)}%
            </div>
        </div>
    );
}

export default PortfolioValue;