import React from "react";
import '../Fonts.css';
import Button from './Button.js';

function Card({title, data, buttonText, buttonView, handleClick}){
    const containerStyle = {
        maxWidth: "256px",
        minWidth: "190px",
        borderRadius: "8px",
        backgroundColor: "#363557",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        gap: "0px",
        left: "0",

    };

    if(buttonView === 'off'){
        return (
            <div style={containerStyle}>
                <h3 className="h3" style={{paddingBottom: "8px", margin:"0"}}>{title}</h3>
                <p className="display" style={{paddingBottom: "24px", margin:"0"}}>{data}</p>
            </div>
        );
    }
    else {
        return (
            <div style={containerStyle}>
                <h3 className="h3" style={{paddingBottom: "8px", margin:"0"}}>{title}</h3>
                <p className="display" style={{paddingBottom: "24px", margin:"0"}}>{data}</p>
                <Button variable="modal" text={buttonText} onClick={handleClick}/>
            </div>
        );
    }

}

export default Card;