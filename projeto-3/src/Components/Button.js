import React from "react";
import { Link } from 'react-router-dom';

function Button({type, variable, text, onClick}){
    const containerStyle = {
        flex: 1,
        backgroundColor: "#6A67FF",
        outline: "none",
        border: "none",
        color: "#ffffff",
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "600",
        padding: "12px 24px",
        borderRadius: "4px",
        maxHeight: "44px",
    };

    if(variable === 'default'){
        return(
            <Link to={onClick}>
                <button style={containerStyle} type={type} fullWidth>
                    {text}
                </button>
            </Link>
        );
    }
    else if(variable === 'modal'){
        return(
            <button type={type} style={containerStyle} onClick={onClick} fullWidth>{text}</button>
        );
    }
    
}

export default Button;