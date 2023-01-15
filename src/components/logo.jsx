import React from "react";
import Tilt from 'react-parallax-tilt';
import Brain from './brain.png'
function Logo(){
    return(
     <div className="logo">
      <Tilt>
        <img src={Brain} alt="" style={{width: '120px', height : "120px"}}/>
      </Tilt>
     </div>
    )
}

export default Logo;
