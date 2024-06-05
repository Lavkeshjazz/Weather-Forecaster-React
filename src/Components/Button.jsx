import React from "react";

const Button=(props)=>{
    return(
        <button id="submit" className="btn btn-outline-success" type="submit" onClick={props.onClick}>{props.value}</button> 
    )
}

export default Button;