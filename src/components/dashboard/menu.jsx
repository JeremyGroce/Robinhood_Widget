import {React, useState} from "react";

import '../../styling/HamburgerMenu.css'

function HamburgerMenu() 
{
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div 
            className={`hamburger-component ${isOpen ? "open":  ""}`}
            onClick={()=> setIsOpen(!isOpen)}    
        >
    
        {/* create array of lines */}
        {[...Array(6)].map((_,index)=> (
            <div key={index}></div> 
        ))}



        </div>
    );

}

export default HamburgerMenu;