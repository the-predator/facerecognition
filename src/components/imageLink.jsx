import React from "react";

function ImageLink(props){
    const [userInput, setUserInput] = React.useState("");

    function handleChange(event){
        const {value} = event.target;
        setUserInput(value);
    }
    function handleSubmit(event){
        event.preventDefault();
        props.fetchImg(userInput);
        setUserInput("");
    }

    return(
        <div className="imgLink">
           <div>
           <p className="imgLinkText">Enter an image URL and find faces</p>
            <div style={{width: "100%", 
            display : "flex", 
            justifyContent: "center", 
            flexWrap :"wrap", 
            boxShadow:"none",
            border : "none"
            }}>
                <input type="text" 
                name="input" 
                placeholder="Enter Link Here...."
                onChange={handleChange}
                value={userInput}
             />
                <button onClick={handleSubmit}>Detect</button>
            </div>
           </div>
        </div>
    )
}

export default ImageLink;