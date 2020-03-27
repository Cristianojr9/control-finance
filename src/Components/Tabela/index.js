import React from 'react';
import MaterialTable from 'material-table';
import { FiPower } from 'react-icons/fi';

export default function MaterialTableDemo() {

  const [state, setState] = React.useState({
    columns: [
      { title: 'Nome', field: 'name' },
      { title: 'Valor', field: 'value', type: 'value' },
      { title: 'Descricao', field: 'description' },
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
        <button type="button">
          <FiPower size={18} color="#6c63ff" />
        </button>
      </header>
      <h1>Escolha uma das opções</h1>
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
