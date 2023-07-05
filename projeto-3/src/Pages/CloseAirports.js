import React, { useState, useEffect } from 'react';
import './CloseAirports.css';
import '../Fonts.css';
import '../Components/InputText.css';

import instance from '../Services/api.js';

import Header from '../Components/Header.js';
import LinkButton from '../Components/LinkButton.js';
import Table from '../Components/Table.js';
import Button from '../Components/Button.js';


function CloseAirports() {

    const columns = [
        {label: "Nº", dataKey: "numero"},
        {label: "Estado", dataKey: "estado"},
        {label: "IATA", dataKey: "iata"},
        {label: "Aeroporto", dataKey: "aeroporto"},
        {label: "Cidade", dataKey: "cidade"},
        {label: "Distancia", dataKey: "distancia"},
        {label: "Tipo", dataKey: "tipo"},
    ];
    
    
    const [cityName, setCityName] = useState('');

    const handleChange = (e) => {
      setCityName(e.target.value);
      console.log(cityName)
    }

    const [formattedData, setFormattedData] = useState([]);

    const formatTableData = (response) => {
      const data = response.data.map(item => ({
        numero: item.number,
        estado: item.state,
        iata: item.iata,
        aeroporto: item.airport,
        cidade: item.city,
        distancia: item.distance,
        tipo: item.type
      }));
      setFormattedData(data);
    }

    const handleSubmit = async (e) => {
      try{
        const response = await instance.get('/admin/airports-cities/',{
          params: {
            cityName: cityName,
          }
        });
        formatTableData(response.data);
      } catch (error) {
        console.log('error', error);
        throw error;
      }
    }

    return (
    <div>
      <Header />
      <div className="AllContainer">
        <div className="ScreenContainer">
          <div className="TitleContainer">
            <LinkButton text="VOLTAR PARA OVERVIEW" path="/HomeAdmin"/>
            <div className="TitleAndSearch">
                <h1 className="h1">Aeroportos próximos</h1>
                <div className="SearchContainer">
                    <input className="InputText" type="text" name="cityName" onChange={handleChange}/>
                    <Button variable="modal" text="Pesquisar" onClick={handleSubmit}/>
                </div>
            </div>
          </div>
          <div className="ContentContainer">
            <Table columns={columns} data={formattedData}/>
          </div>
        </div>
      </div>
    </div>
    );
}

export default CloseAirports;