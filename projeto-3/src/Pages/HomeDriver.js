import React, { useState, useEffect } from 'react';

import './Modal.css';
import './HomeDriver.css';
import '../Fonts.css';
import '../Components/InputText.css';

import createAxiosInstance from '../Services/apiLogged.js';

import Header from '../Components/Header.js';
import Button from '../Components/Button.js';
import Card from '../Components/Card.js';
import getToken from '../Services/token.js';

function HomeConstructor() {

    const nomeDoPiloto = () => {
        const nameDriver = localStorage.getItem('nomePiloto'); 
        const textoCapitalizado = capitalizeFirstLetter(nameDriver);   
        return textoCapitalizado;
    }

    function capitalizeFirstLetter(string) {
        return string.replace(/^(.)(.*)$/, function(_, firstChar, restOfString) {
          return firstChar.toUpperCase() + restOfString;
        });
      }

  const token = getToken();
  const instance = createAxiosInstance(token);

  const [victoriesCount, setVictoriesCount] = useState(null);
  const [yearBegin, setYearBegin] = useState(null);
  const [yearLast, setYearLast] = useState(null);

  useEffect(() => {
    fetchVictoriesCount();
    fetchYearsData();
  }, []);

  const fetchVictoriesCount = async () => {
    try {
      const response = await instance.get('/driver/victories',{
        params: {
            p_driverref: localStorage.getItem('nomePiloto'),
        }
    });
        setVictoriesCount(response.data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const fetchYearsData = async () => {
    try {
      const response = await instance.get('/driver/historic',{
        params: {
            p_driverref: localStorage.getItem('nomePiloto'),
        }
    });
        setYearBegin(response.data.firstyear);
        setYearLast(response.data.lastyear);
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
            <h1 className="h1">Olá, {nomeDoPiloto()}</h1>
            <div className="ButtonsContainer">
              <Button variable="default" text="Ver resultados" onClick="/ResultsDriver"/>
              <Button variable="default" text="Histórico de vitórias" onClick="/HistoryDriver"/>
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
              <Card title="Vitórias" data={victoriesCount} buttonView="off"/>
              <Card title="Primeiro ano de registro" data={yearBegin} buttonView="off"/>
              <Card title="ùltimo ano de registro" data={yearLast} buttonView="off" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeConstructor;
