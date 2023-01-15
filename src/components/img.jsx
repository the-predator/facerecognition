import React from "react";

function Img({url, imgRef, canvasRef}){
    return(
        <img ref={imgRef} 
        crossOrigin="anonymous"
        src={url}
        alt="couldn't load the image" 
        style={{width: '440px', height: '400px'}}
        />
        
    )
}

export default Img;