import React from "react";
import Logo from "./logo";

function Navigation(){
    return(
       <div style={{display: "flex", flexWrap : "wrap", justifyContent: "space-between", marginTop: "20px"}}>
        <Logo />
         < div>
         <nav>
            <p>Sign Out</p>
        </nav>
         </div>
       </div>
    )
}

export default Navigation;