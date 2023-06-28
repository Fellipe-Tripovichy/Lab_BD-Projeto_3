import React from 'react';
import './ResultsAdmin.css';
import '../Fonts.css';
import Header from '../Components/Header.js';
import LinkButton from '../Components/LinkButton.js';
import Table from '../Components/Table.js';

function ResultsAdmin() {
  const columns = [
    {label: "Status", dataKey: "status"},
    {label: "Contagem", dataKey: "contagem"},
  ];

  const tableData = [
    {status: "Teste 1", contagem: "Teste 1"},
    {status: "Teste 2", contagem: "Teste 2"},
    {status: "Teste 3", contagem: "Teste 3"},
  ]


  return (
    <div>
      <Header />
      <div className="AllContainer">
        <div className="ScreenContainer">
          <div className="TitleContainer">
            <LinkButton text="VOLTAR PARA OVERVIEW" path="/"/>
            <h1 className="h1">Resultados</h1>
          </div>
          <div className="ContentContainer">
            <Table columns={columns} data={tableData}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultsAdmin;
