import React from "react";
import Navigation from "./navigation";
import ImageLink from "./imageLink";
import Detect from "./detectedImg";
import Title from "./title";

function App() {
  const [imgURL, setImgURL] =  React.useState("");

  function imgLink(link){
   setImgURL(link);
  }
  return (
    <div className="App">
      <Navigation />
       {!imgURL && <ImageLink fetchImg={imgLink}/>}
       <div style={{position: 'relative', top : '-100px'}}>
       {imgURL && <Title />}
       {imgURL && <Detect url={imgURL}/>}
       </div>
      </div>
  );
}

export default App;
