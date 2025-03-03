import React from "react";

import '../../styling/portfolioValue.css';

function PortfolioValue ({currentValue}) 
{

    return(
        <div className="portfolioValue-component"
             onClick={()=>currentValue("Portfolio")}>
            $3,000
        </div>
    );
}

export default PortfolioValue;