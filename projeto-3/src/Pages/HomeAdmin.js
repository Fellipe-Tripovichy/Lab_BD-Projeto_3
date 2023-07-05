import React, { useState, useEffect } from 'react';

import './Modal.css';
import './HomeAdmin.css';
import '../Fonts.css';
import '../Components/InputText.css';

import createAxiosInstance from '../Services/apiLogged.js';

import Header from '../Components/Header.js';
import Button from '../Components/Button.js';
import Card from '../Components/Card.js';
import closeIcon from '../Images/close.svg';
import getToken from '../Services/token.js';

function HomeAdmin() {
  const nomeDoUsuario = () => {
      const nameAdmin = localStorage.getItem('nomeAdmin');
      const textoCapitalizado = capitalizeFirstLetter(nameAdmin);   
      return textoCapitalizado;
  }

  function capitalizeFirstLetter(string) {
    return string.replace(/^(.)(.*)$/, function(_, firstChar, restOfString) {
      return firstChar.toUpperCase() + restOfString;
    });
  }

  const token = getToken();
  const instance = createAxiosInstance(token);

  const [driverFormData, setDriverFormData] = useState({
    driverref: '',
    number: '',
    forname: '',
    surname: '',
    code:  '',
    dob: '',
    nationality: '',
  })

  const handleChangeDriver = (e) => {
    console.log(driverFormData);
    setDriverFormData({
      ...driverFormData,
      [e.target.name]: e.target.value,
    });
  };

  function transformStringToDate(dateString) {
    var dateParts = dateString.split('/');
    var day = parseInt(dateParts[0], 10);
    var month = parseInt(dateParts[1], 10) - 1; // Months are zero-based
    var year = parseInt(dateParts[2], 10);
    
    return new Date(year, month, day);
  }

  const handleSubmitDriver = async (e) => {
    e.preventDefault();

    const mappedData = {
      ...driverFormData, number: +driverFormData.number, dob: transformStringToDate(driverFormData.dob)
    }

    try {
      console.log(mappedData);
      const response = instance.post('/admin/driver', mappedData);
      toggleModalPiloto();
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const [constructorFormData, setConstructorFormData] = useState({
    constructorref: '',
    name: '',
    nationality: '',
    url: '',
  })

  const handleChangeConstructor = (e) => {
    setConstructorFormData({
      ...constructorFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitConstructor = async (e) => {
    e.preventDefault();

    try {
      console.log(constructorFormData);
      const response = instance.post('/admin/constructor', constructorFormData);
      toggleModalEscuderia();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const [modalPiloto, setModalPiloto] = useState(false);
  const [modalEscuderia, setModalEscuderia] = useState(false);

  const toggleModalPiloto = ()  => {
    setModalPiloto(!modalPiloto);
  }

  const toggleModalEscuderia = ()  => {
    setModalEscuderia(!modalEscuderia);
  }

  const [driversCount, setDriversCount] = useState(null);
  const [racesCount, setRacesCount] = useState(null);
  const [constructorCount, setConstructorCount] = useState(null);
  const [seasonsCount, setSeasonsCount] = useState(null);

  useEffect(() => {
    fetchDriversCount();
    fetchRacesCount();
    fetchConstructorCount();
    fetchSeasonsCount();
  }, []);

  const fetchDriversCount = async () => {
    try {
      const response = await instance.get('/admin/driver');
      setDriversCount(response.data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const fetchRacesCount = async () => {
    try {
      const response = await instance.get('/admin/race');
      setRacesCount(response.data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const fetchConstructorCount = async () => {
    try {
      const response = await instance.get('/admin/constructor');
      setConstructorCount(response.data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const fetchSeasonsCount = async () => {
    try {
      const response = await instance.get('/admin/season');
      setSeasonsCount(response.data);
    } catch (error) {
      console.log('Error:', error);
    }
  };
    
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
              <Card title="Pilotos cadastrados" data={driversCount} handleClick={toggleModalPiloto} buttonText="Adicionar piloto"/>
              <Card title="Escuderias cadastradas" data={constructorCount} handleClick={toggleModalEscuderia} buttonText="Adicionar escuderia"/>
              <Card title="Corridas realizadas" data={racesCount} buttonView="off" />
              <Card title="Temporadas" data={seasonsCount} buttonView="off"/>
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
              <img src={closeIcon}/>
            </button>
            <div style={{display: "flex", flexDirection: "row", gap: "16px", flex: "1", paddingBottom: "16px"}}>
              <div style={{display: "flex", flexDirection: "column", gap: "4px", flex: "1"}}>
                <h3 className="h3" style={{margin: "0"}}>Referência</h3>
                <input className="InputText" type="text" name="driverref" value={driverFormData.driverref} onChange={handleChangeDriver}/>
              </div>
              <div style={{display: "flex", flexDirection: "column", gap: "4px", flex: "1"}}>
                <h3 className="h3" style={{margin: "0"}}>Número</h3>
                <input className="InputText" type="text" name="number" value={driverFormData.number} onChange={handleChangeDriver}/>                
              </div>
            </div>
            <div style={{display: "flex", flexDirection: "row", gap: "16px", flex: "1", paddingBottom: "16px"}}>
              <div style={{display: "flex", flexDirection: "column", gap: "4px", flex: "1"}}>
                <h3 className="h3" style={{margin: "0"}}>Nome</h3>
                <input className="InputText" type="text" name="forname" value={driverFormData.forname} onChange={handleChangeDriver}/> 
              </div>
              <div style={{display: "flex", flexDirection: "column", gap: "4px", flex: "1"}}>
                <h3 className="h3" style={{margin: "0"}}>Sobrenome</h3>
                <input className="InputText" type="text" name="surname" value={driverFormData.surname} onChange={handleChangeDriver}/> 
              </div>
            </div>
            <div style={{display: "flex", flexDirection: "row", gap: "16px", flex: "1", paddingBottom: "16px"}}>
              <div style={{display: "flex", flexDirection: "column", gap: "4px", flex: "1"}}>
                <h3 className="h3" style={{margin: "0"}}>Código</h3>
                <input className="InputText" type="text" name="code" value={driverFormData.code} onChange={handleChangeDriver}/> 
              </div>
              <div style={{display: "flex", flexDirection: "column", gap: "4px", flex: "1"}}>
                <h3 className="h3" style={{margin: "0"}}>Data de nascimento</h3>
                <input className="InputText" type="text" name="dob" value={driverFormData.dob} onChange={handleChangeDriver}/> 
              </div>
            </div>
            <div style={{display: "flex", flexDirection: "row", gap: "16px", flex: "1", paddingBottom: "16px"}}>
              <div style={{display: "flex", flexDirection: "column", gap: "4px", flex: "1"}}>
                <h3 className="h3" style={{margin: "0"}}>Nacionalidade</h3>
                <input className="InputText" type="text" name="nationality" value={driverFormData.nationality} onChange={handleChangeDriver}/> 
              </div>
            </div>
            <Button variable="modal" text="Cadastrar" onClick={handleSubmitDriver}/>
        </div>
      </div>
      )}

      {modalEscuderia && (
      <div className="modal">
        <div onClick={toggleModalEscuderia} className="overlay"></div>
        <div className="modal-content">
            <h2 className="h2">Cadastrar nova escuderia</h2>
            <button className="close-modal" onClick={toggleModalEscuderia}>
              <img style={{width: "24px"}}src={closeIcon}/>
            </button>
            <div style={{display: "flex", flexDirection: "row", gap: "16px", flex: "1", paddingBottom: "16px"}}>
              <div style={{display: "flex", flexDirection: "column", gap: "4px", flex: "1"}}>
                <h3 className="h3" style={{margin: "0"}}>Referência</h3>
                <input className="InputText" type="text" name="constructorref" value={constructorFormData.constructorref} onChange={handleChangeConstructor}/>
              </div>
              <div style={{display: "flex", flexDirection: "column", gap: "4px", flex: "1"}}>
                <h3 className="h3" style={{margin: "0"}}>Nacionalidade</h3>
                <input className="InputText" type="text" name="nationality" value={constructorFormData.nationality} onChange={handleChangeConstructor}/>
              </div>
            </div>
            <div style={{display: "flex", flexDirection: "row", gap: "16px", flex: "1", paddingBottom: "16px"}}>
              <div style={{display: "flex", flexDirection: "column", gap: "4px", flex: "1"}}>
                <h3 className="h3" style={{margin: "0"}}>Nome</h3>
                <input className="InputText" type="text" name="name" value={constructorFormData.name} onChange={handleChangeConstructor}/>
              </div>
              <div style={{display: "flex", flexDirection: "column", gap: "4px", flex: "1"}}>
                <h3 className="h3" style={{margin: "0"}}>URL</h3>
                <input className="InputText" type="text" name="url" value={constructorFormData.url} onChange={handleChangeConstructor}/>
              </div>
            </div>
            <Button variable="modal" text="Cadastrar" onClick={handleSubmitConstructor}/>
        </div>
      </div>
      )}
    </div>
  );
}

export default HomeAdmin;
