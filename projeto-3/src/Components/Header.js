import React from "react";
import logo from '../Images/Logo.svg';
import Button from './Button.js';

function Header(buttonState){
    const containerStyle = {
        backgroundColor: '#363557',
        display: "flex",
        width: "100%",
        justifyContent: "center",
        position: "fixed",
        top: 0,
        left: 0
    };

    const imageStyle = {
        padding: "16px",
        width: "96px",
    };

    const buttonStyle = {
        position: "absolute",
        right: '10%',
        top: '0.5vh',
    };

    if(buttonState === 'off'){
        return (
            <div style={containerStyle}>
                <img style={imageStyle} src={logo} alt="Logo da formula 1"/>
            </div>
        );  
    } else {
        return (
            <div style={containerStyle}>
                <img style={imageStyle} src={logo} alt="Logo da formula 1"/>
                <div style={buttonStyle}>
                    <Button variable="default" text="Sair" onClick="/"/>
                </div>
            </div>
        );
    }

}

export default Header;