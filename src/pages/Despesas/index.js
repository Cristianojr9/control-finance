import React from 'react';
import MaterialTable from 'material-table';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css'

export default function Despesas() {

  const [state, setState] = React.useState({
    columns: [
      { title: 'Nome', field: 'name' },
      { title: 'Valor', field: 'value', type: 'value' },
      { title: 'Descrição', field: 'description' },
      { title: 'Data', field: 'date', type: 'date' },
      {
        title: 'Pago',
        field: 'pago',
        lookup: { 1: 'Sim', 2: 'Não' },
      },
    ],
    data: [{ 
      name: 'Nubank', 
      value: "100", 
      description: "Cartão de crédito", 
      date: "10/03/2020", 
      pago: 2 
    }],
  });

  return (
    <div className="profile-container">
      <header>
        <span>Bem vindo, Junior</span>
        <Link to="/profile">
          <button type="button">
            <FiArrowLeft size={18} color="#6c63ff" />
          </button>
        </Link>
      </header>
      <h1>DESPESAS</h1>
      <MaterialTable
      title="Tabela de Despesas"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
            Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(state.data.value);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
            Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(state.data.value);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
            Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(state.data.value);
          }),
      }}
    />
    </div>
  );
}
