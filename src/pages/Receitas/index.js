import React from 'react';
import MaterialTable from 'material-table';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export default function Receitas() {

  const [state, setState] = React.useState({
    columns: [
      { title: 'Nome', field: 'name' },
      { title: 'Valor', field: 'value', type: 'value' },
      { title: 'Descrição', field: 'description' },
      { title: 'Data', field: 'date', type: 'date' },
      {
        title: 'Recebido',
        field: 'pago',
        lookup: { 1: 'Sim', 2: 'Não' },
      },
    ],
    data: [{ 
      name: 'Frella', 
      value: "100", 
      description: "Fiz um frella", 
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
      <h1>RECEITAS</h1>
      <MaterialTable
      color="#71a"
      title="Tabela de Receitas"
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
