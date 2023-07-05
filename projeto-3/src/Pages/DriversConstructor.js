import React, { useState, useEffect } from 'react';
import './DriversConstructor.css';
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
    {label: "Piloto", dataKey: "piloto"},
    {label: "Vitorias", dataKey: "vitorias"},
  ];

  const [formattedData, setFormattedData] = useState([]);

  const formatTableData = (response) => {
    const data = response.data.map(item => ({
        piloto: item.driver,
        vitorias: item.victories
    }));
    setFormattedData(data);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get('/escuderia/driverAndVictories',{
            params: {
                constructorId: localStorage.getItem('idEscuderia'),
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
          <div className="aContainer">
            <LinkButton text="VOLTAR PARA OVERVIEW" path="/HomeConstructor"/>
            <h1 className="h1">Pilotos</h1>
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
