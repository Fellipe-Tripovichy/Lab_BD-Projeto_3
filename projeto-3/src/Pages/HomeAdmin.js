import React, { useState } from 'react';

import './Modal.css';
import './HomeAdmin.css';
import '../Fonts.css';

import Header from '../Components/Header.js';
import Button from '../Components/Button.js';
import Card from '../Components/Card.js';
import InputText from '../Components/InputText';
import closeIcon from '../Images/close.svg';

function HomeAdmin() {
  const nomeDoUsuario = () => {
    return "Fellipe";
  }

  const [modalPiloto, setModalPiloto] = useState(false);
  const [modalEscuderia, setModalEscuderia] = useState(false);

  const toggleModalPiloto = ()  => {
    setModalPiloto(!modalPiloto);
  }

  const toggleModalEscuderia = ()  => {
    setModalEscuderia(!modalEscuderia);
  }

  const sendPilotRegister = () => {
    toggleModalPiloto();
  }

  const sendEscuderiaRegister = () => {
    toggleModalEscuderia();
  }

  return (
    <div style={{backgroundColor:"#1E1D35"}}>
      <Header />
      <div className="AllContainer">
        <div className="ScreenContainer">
          <div className="TitleContainer">
            <h1 className="h1">Olá, {nomeDoUsuario()}</h1>
            <div className="ButtonsContainer">
              <Button variable="default" text="Ver resultados" onClick="/ResultsAdmin"/>
              <Button variable="default" text="Ver aeroportos próximos" onClick="/CloseAirports"/>
            </div>
          </div>
          <div style={{padding: "32px 0px"}}>
            <div className="Division"></div>
          </div>
          <div className="ContentContainer">
            <div style={{display: "flex", justifyContent: "flex-start"}}>
              <h2 className="h2">Informações gerais</h2>
            </div>
            <div className="CardContainer">
              <Card title="Pilotos cadastrados" data="234" handleClick={toggleModalPiloto} buttonText="Adicionar piloto"/>
              <Card title="Escuderias cadastradas" data="32" handleClick={toggleModalEscuderia} buttonText="Adicionar escuderia"/>
              <Card title="Corridas realizadas" data="3456" buttonView="off" />
              <Card title="Temporadas" data="60" buttonView="off"/>
            </div>
          </div>
        </div>
      </div>

      {modalPiloto && (
      <div className="modal">
        <div onClick={toggleModalPiloto} className="overlay"></div>
        <div className="modal-content">
            <h2 className="h2">Cadastrar novo piloto</h2>
            <button className="close-modal" onClick={toggleModalPiloto}>
              <image src={closeIcon}/>
            </button>
            <div style={{display: "flex", flexDirection: "row", gap: "16px", flex: "1", paddingBottom: "16px"}}>
              <div style={{display: "flex", flexDirection: "column", gap: "4px", flex: "1"}}>
                <h3 className="h3" style={{margin: "0"}}>Referência</h3>
                <InputText type="text" placeholder={""}/>
              </div>
              <div style={{display: "flex", flexDirection: "column", gap: "4px", flex: "1"}}>
                <h3 className="h3" style={{margin: "0"}}>Número</h3>
                <InputText type="text" placeholder={""}/>
              </div>
            </div>
            <div style={{display: "flex", flexDirection: "row", gap: "16px", flex: "1", paddingBottom: "16px"}}>
              <div style={{display: "flex", flexDirection: "column", gap: "4px", flex: "1"}}>
                <h3 className="h3" style={{margin: "0"}}>Nome</h3>
                <InputText type="text" placeholder={""}/>
              </div>
              <div style={{display: "flex", flexDirection: "column", gap: "4px", flex: "1"}}>
                <h3 className="h3" style={{margin: "0"}}>Sobrenome</h3>
                <InputText type="text" placeholder={""}/>
              </div>
            </div>
            <div style={{display: "flex", flexDirection: "row", gap: "16px", flex: "1", paddingBottom: "16px"}}>
              <div style={{display: "flex", flexDirection: "column", gap: "4px", flex: "1"}}>
                <h3 className="h3" style={{margin: "0"}}>Código</h3>
                <InputText type="text" placeholder={""}/>
              </div>
              <div style={{display: "flex", flexDirection: "column", gap: "4px", flex: "1"}}>
                <h3 className="h3" style={{margin: "0"}}>Data de nascimento</h3>
                <InputText type="text" placeholder={""}/>
              </div>
            </div>
            <div style={{display: "flex", flexDirection: "row", gap: "16px", flex: "1", paddingBottom: "16px"}}>
              <div style={{display: "flex", flexDirection: "column", gap: "4px", flex: "1"}}>
                <h3 className="h3" style={{margin: "0"}}>Nacionalidade</h3>
                <InputText type="text" placeholder={""}/>
              </div>
            </div>
            <Button variable="modal" text="Cadastrar" onClick={sendPilotRegister}/>
        </div>
      </div>
      )}

      {modalEscuderia && (
      <div className="modal">
        <div onClick={toggleModalEscuderia} className="overlay"></div>
        <div className="modal-content">
            <h2 className="h2">Cadastrar nova escuderia</h2>
            <button className="close-modal" onClick={toggleModalEscuderia}>
              <image style={{width: "24px"}}src={closeIcon}/>
            </button>
            <div style={{display: "flex", flexDirection: "row", gap: "16px", flex: "1", paddingBottom: "16px"}}>
              <div style={{display: "flex", flexDirection: "column", gap: "4px", flex: "1"}}>
                <h3 className="h3" style={{margin: "0"}}>Referência</h3>
                <InputText type="text" placeholder={""}/>
              </div>
              <div style={{display: "flex", flexDirection: "column", gap: "4px", flex: "1"}}>
                <h3 className="h3" style={{margin: "0"}}>Nacionalidade</h3>
                <InputText type="text" placeholder={""}/>
              </div>
            </div>
            <div style={{display: "flex", flexDirection: "row", gap: "16px", flex: "1", paddingBottom: "16px"}}>
              <div style={{display: "flex", flexDirection: "column", gap: "4px", flex: "1"}}>
                <h3 className="h3" style={{margin: "0"}}>Nome</h3>
                <InputText type="text" placeholder={""}/>
              </div>
              <div style={{display: "flex", flexDirection: "column", gap: "4px", flex: "1"}}>
                <h3 className="h3" style={{margin: "0"}}>URL</h3>
                <InputText type="text" placeholder={""}/>
              </div>
            </div>
            <Button variable="modal" text="Cadastrar" onClick={sendEscuderiaRegister}/>
        </div>
      </div>
      )}
    </div>
  );
}

export default HomeAdmin;
