import React from "react";
// import Button from "@mui/material/Button";
import "./button1.css"
import arrowDown from "../../Images/arrowDown1.png"

function Button1() {
  return (
    
    <div className="buttonContainer">
      {/* <Button variant="contained" className ="button1">Discover</Button> */}    
      <a href="#main" className="button"><p>DISCOVER</p> <img src={arrowDown} /></a>  
    </div>
   
  );
}

export default Button1;
