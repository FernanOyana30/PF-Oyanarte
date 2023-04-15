import React from "react";

function Button(props){
    const stylesButton = {
        backgroundColor: props.color || "green",
        color: "white",
        padding: "4px 10px",
        borderRadius: "8px",   
        borderColor: "lightGray",     
    };

    return (
    <button style={stylesButton} onClick={props.onTouchButton}>
        {props.children}
    </button> ) ;
}

export default Button;