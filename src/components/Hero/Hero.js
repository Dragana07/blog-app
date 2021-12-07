import React from "react";
import "./hero.style.css";
import Button1 from "../Button/Button1";

import Navbar from "../Navbar/Navbar";

function Hero() {
  return (
    <div className="heroBacground">
      <div className="nav">
        <Navbar/>
      </div>
      
      <div className="myButton">    

     <Button1 />
        
      </div>
    </div>
  );
}

export default Hero;
