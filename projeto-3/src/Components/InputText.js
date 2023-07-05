import React from "react";

function InputText({type, placeholder, changeHandler, value, id, name}){
    
    const inputTextStyle = {
        backgroundColor: "#454469",
        fontFamily: "Montserrat, sans-serif",
        fontSize: "16px",
        fontWeight: "300",
        color: "#ffffff",
        lineHeight: "120%",
        paddingTop: "12px",
        paddingBottom: "12px",
        outline: "none",
        border: "none",
        borderRadius: "4px",
        paddingLeft: "12px"
    }
    
    return (
        <input style={inputTextStyle} id={id} type={type} name={name} value={value} placeholder={placeholder} onChange={changeHandler}/>
    );
}

export default InputText;