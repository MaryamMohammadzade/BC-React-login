import React from "react";

function Media(props){
    return(
       <img src={props.url} alt="social media icon" className="w-8 h-8 rounded-full cursor-pointer"/>
    )
}
export default Media;