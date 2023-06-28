import React from 'react';
import './CloseAirports.css';
import '../Fonts.css';

import Header from '../Components/Header.js';
import LinkButton from '../Components/LinkButton.js';
import Table from '../Components/Table.js';
import InputText from '../Components/InputText.js';
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
    
      const tableData = [
        {numero: "Teste 1", estado: "Teste 1", iata: "Teste 1", aeroporto: "Teste 1", cidade: "Teste 1", distancia: "Teste 1", tipo: "Teste 1"},
        {numero: "Teste 2", estado: "Teste 2", iata: "Teste 2", aeroporto: "Teste 2", cidade: "Teste 2", distancia: "Teste 2", tipo: "Teste 2"},
        {numero: "Teste 3", estado: "Teste 3", iata: "Teste 3", aeroporto: "Teste 3", cidade: "Teste 3", distancia: "Teste 3", tipo: "Teste 3"},
      ]

    return (
    <div>
      <Header />
      <div className="AllContainer">
        <div className="ScreenContainer">
          <div className="TitleContainer">
            <LinkButton text="VOLTAR PARA OVERVIEW" path="/"/>
            <div className="TitleAndSearch">
                <h1 className="h1">Aeroportos próximos</h1>
                <div className="SearchContainer">
                    <InputText type="text" placeholder="Digite aqui"/>
                    <Button variable="default" text="Pesquisar"/>
                </div>
            </div>
          </div>
          <div className="ContentContainer">
            <Table columns={columns} data={tableData}/>
          </div>
        </div>
      </div>
    </div>
    );
}

export default CloseAirports;