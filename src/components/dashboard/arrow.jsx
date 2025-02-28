import React from "react";
import ArrowIcon from '../../../public/imgs/upArrow.svg'
// If value >=0, arrow is green, otherwise red

const Arrow = ({value})=>
{
    const color = value >= 0 ? "#32d20a" : ":FF0000";
    const rotation = value >= 0 ? "rotate(0deg)" : "rotate(180deg)";

    return(
            <ArrowIcon
                style={
                    {
                        transform: rotation,
                        fill: color
                    }
                }
            />
    )
}

export default Arrow;