import React from "react";
import '../Fonts.css';

function Table({ columns, data }) {
    
    const headerStyle = {
      backgroundColor: "#6A67FF",
      height: "52px",
    }

    const tableStyle = {
      backgroundColor: "#454475",
      borderRadius: "16px",
      overflow: "hidden",
    }

    const contentStyle = {
      paddingLeft: "32px",
      paddingTop: "16px",
      paddingBottom: "16px",
    }
  
    return (
      <table style={tableStyle}>
        <thead style={headerStyle}>
          <tr>
            {columns.map((column, index) => (
              <th className="h3" key={index}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr  key={rowIndex}>
              {columns.map((column, columnIndex) => (
                <td style={contentStyle} className="body" key={columnIndex}>{row[column.dataKey]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default Table;