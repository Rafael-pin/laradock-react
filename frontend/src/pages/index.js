import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../services/api';

import './styles.css';

export default function usersPage() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const history = useHistory();

  // async function handleLogin(e) {
  //   e.preventDefault();

  //   try {
  //     const response = await api.post('api/login', { email, password });
  //     localStorage.setItem('token', response.data.token);

  //     history.push('/lists');
  //   } catch (err) {
  //     alert('Falha no login, tente novamente.');
  //   }
  // }

  return (
    <div className="users-container">
      <section className="form">

      <StyledEngineProvider injectFirst>
        <CrudTable rows={userList} />
      </StyledEngineProvider>,

      </section>
    </div>
  );
}