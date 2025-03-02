import React from "react";
import ArrowIcon from "../../assets/imgs/upArrow.svg?react";


const Arrow = ({ value }) => {

  // #32d20a"
  return (
    <ArrowIcon
      style={{
        transform: value >= 0 ? "rotate(0deg)" : "rotate(180deg)",
        width: "30px", 
        height: "30px", 
        color: value >= 0 ? "#32d20a" : "red"
      }}


    />
  );
};

export default Arrow;
