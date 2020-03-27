import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';
import img from '../../assets/img.svg';

export default function Logon() {

  const history = useHistory();

  function handleLogin(e) {
    history.push('/profile')
  }

  return (
    <div className="logon-container">
      <section className="form">
        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input 
            placeholder="Seu usuário"
          />
          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#6c63ff"/>  
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={img} height="500px" alt="Pessoas"/>
    </div>
  )
}