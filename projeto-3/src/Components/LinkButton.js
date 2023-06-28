import React from "react";
import { Link } from 'react-router-dom';
import image from '../Images/arrow-left.svg';

function LinkButton({text, path}){
    const containerStyle = {
        backgroundColor: "transparent",
        outline: "none",
        border: "none",
        color: "#8E8E9A",
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "600",
        borderRadius: "4px",
        maxWidth: "256px",
        maxHeight: "44px",
    };

    const LinkButtonContainer ={
        display: "flex",
        alignItems: "center",
        gap: "8px"
    };

    return(
            <Link to={path}>
                <div style={LinkButtonContainer}>
                    <img src={image} alt="Ícone de seta para a esquerda"/>
                    <button style={containerStyle}>
                        {text}
                    </button>
                </div>
            </Link>
    );
}

export default LinkButton;