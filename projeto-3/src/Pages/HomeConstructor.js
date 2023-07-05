import React, { useState, useEffect } from 'react';

import './Modal.css';
import './HomeConstructor.css';
import '../Fonts.css';
import '../Components/InputText.css';

import createAxiosInstance from '../Services/apiLogged.js';

import Header from '../Components/Header.js';
import Button from '../Components/Button.js';
import Card from '../Components/Card.js';
import getToken from '../Services/token.js';

function HomeConstructor() {

    const nomeDaEscuderia = () => {
            return "Ferrari";
    }

  const token = getToken();
  const instance = createAxiosInstance(token);

  const [driversCount, setDriversCount] = useState(null);
  const [victoriesCount, setVictoriesCount] = useState(null);
  const [firstYear, setFirstYear] = useState(null);

  useEffect(() => {
    fetchDriversCount();
    fetchVictoriesCount();
  }, []);

  const fetchDriversCount = async () => {
    try {
      const response = await instance.get('/escuderia/drivers',{
        params: {
          p_nome_escuderia: localStorage.getItem('nomeEscuderia'),
        }
    });
      setDriversCount(response.data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const fetchVictoriesCount = async () => {
    try {
      const response = await instance.get('/escuderia/victories',{
        params: {
          p_nome_escuderia: localStorage.getItem('nomeEscuderia'),
        }
    });
      setVictoriesCount(response.data);
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
            <h1 className="h1">Escuderia {nomeDaEscuderia()}</h1>
            <div className="ButtonsContainer">
              <Button variable="default" text="Ver resultados" onClick="/ResultsConstructor"/>
              <Button variable="default" text="Listar pilotos" onClick="/DriversConstructor"/>
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
              <Card title="Pilotos cadastrados" data={driversCount} buttonView="off"/>
              <Card title="Vitórias" data={victoriesCount} buttonView="off"/>
              <Card title="Primeiro ano registrado" data={"Null"} buttonView="off" />
              <Card title="Último ano registrado" data={"Null"} buttonView="off"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeConstructor;
