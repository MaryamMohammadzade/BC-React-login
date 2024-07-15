import React from "react";
function Input(props){
    return(
        <input type="text" placeholder={props.name} className="bg-gray-100 placeholder-black border-none rounded-md h-14 w-5/6 p-3"></input>
    )
}
export default Input;