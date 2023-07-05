import React, { useState, useEffect } from 'react';
import './HistoryDriver.css';
import '../Fonts.css';

import createAxiosInstance from '../Services/apiLogged.js';

import Header from '../Components/Header.js';
import LinkButton from '../Components/LinkButton.js';
import Table from '../Components/Table.js';
import getToken from '../Services/token.js';

function ResultsAdmin() {

  const token = getToken();
  const instance = createAxiosInstance(token);

  const columns = [
    {label: "Ano", dataKey: "ano"},
    {label: "Corrida", dataKey: "corrida"},
    {label: "Contagem", dataKey: "contagem"},
  ];

  const [formattedData, setFormattedData] = useState([]);

  const formatTableData = (response) => {
    const data = response.data.map(item => ({
        ano: item.year,
        corrida: item.race,
        contagem: item.quantity
    }));
    setFormattedData(data);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get('/driver/yearAndRaceName',{
            params: {
                constructorId: localStorage.getItem('idPiloto'),
            }
        });
        formatTableData(response);
        console.log(response);
      } catch (error) {
        console.log('error', error);
        throw error;
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className="AllContainer">
        <div className="ScreenContainer">
          <div className="TitleContainer">
            <LinkButton text="VOLTAR PARA OVERVIEW" path="/HomeDriver"/>
            <h1 className="h1">Histórico de vitórias</h1>
          </div>
          <div className="ContentContainer">
            <Table columns={columns} data={formattedData}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultsAdmin;
