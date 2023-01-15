import React from "react";
import * as faceapi from 'face-api.js';
import Img from "./img";
import Title from  './title'
function Detect({url}){
  const imgRef = React.useRef();
  const canvasRef = React.useRef();
  const [faces, setFaces] = React.useState([])

  const handleImage = async () => {
    const detections = await faceapi
    .detectAllFaces(imgRef.current, new faceapi.TinyFaceDetectorOptions())
    .withFaceLandmarks()
    .withFaceExpressions();
    
    canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(imgRef.current);
    
    console.log(detections);
    faceapi.matchDimensions(canvasRef.current, {
      width : 440,
      height: 400
    });

    const resized = faceapi.resizeResults(detections, {
      width : 440,
      height: 400
    });
    console.log(resized);
    faceapi.draw.drawDetections(canvasRef.current, resized);
    faceapi.draw.drawFaceExpressions(canvasRef.current, resized);
  };

   React.useEffect(() => {
    const loadModels = () => {
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri("./models"),
        faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
        faceapi.nets.faceExpressionNet.loadFromUri("/models"),
      ])
        .then(imgRef && handleImage)
        .catch((e) => console.log(e));
    };

    imgRef.current && loadModels();
  }, []);

  return(
    <div style={{display: 'flex',justifyContent:'center', flexWrap: 'wrap'}}>
    <Img url={url} imgRef={imgRef} canvasRef={canvasRef}/>
    <canvas ref={canvasRef} 
   style={{width: '440', height: '400px', position: "absolute"}}>
   </canvas>
    </div>
  )
}

export default Detect;