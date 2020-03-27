import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import { GoGraph } from 'react-icons/go';

import './styles.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <span>Bem vindo, Junior</span>
        <Link to="/">
          <button type="button">
            <FiPower size={18} color="#6c63ff" />
          </button>
        </Link>
      </header>
      <ul className="container">
        <li className="receitas">
          <h1>RECEITAS</h1>

          <strong>Descrição: </strong>
          <p>Você pode acessar detalhes das suas receitas aqui!</p>

          <strong>Saldo: </strong>
          <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(100)}</p>

          <Link to="/profile/receitas">
            <button type="button">
              <GoGraph color="green" size="30px" />
            </button>
          </Link>
        </li>
        <li className="despesas">
          <h1>DESPESAS</h1>

          <strong>Descrição: </strong>
          <p>Você pode acessar detalhes das suas despesas aqui!</p>

          <strong>Saldo: </strong>
          <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(100)}</p>

          <Link to="/profile/despesas">
            <button type="button">
              <GoGraph color="red" size="30px"/>
            </button>
          </Link>
        </li>
      </ul>
    </div>
  )
}
