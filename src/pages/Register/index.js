import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <h1>Cadastro</h1>
          <p>Faça o cadastro e controle seu dinheiro!</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#6c63ff"/>  
            Voltar ao Logon
          </Link>
        </section>

        <form>
          <input 
            placeholder="User"
          />
          <input 
            type="email" 
            placeholder="Email"
          />
          <input 
            type="password" 
            placeholder="Senha"
          />
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}