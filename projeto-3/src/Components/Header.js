import React from "react";
import logo from '../Images/Logo.svg';

function Header(){
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


    return (
        <div style={containerStyle}>
            <img style={imageStyle} src={logo} alt="Logo da formula 1"/>
        </div>
    );
}

export default Header;