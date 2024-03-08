import React, { useState } from 'react';
import "./style.css"

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const nome = (n) => {
    setUsername(n.target.value);
  };

  const senha = (s) => {
    setPassword(s.target.value);
  };

  const submit = (envio) => {
    envio.preventDefault();
    if (username === 'user' && password === 'password') {
      setError('');
      alert('Login bem sucedido');
    } else {
      setError('Credenciais inválidas');
    }
  };

  return (
    <div id="container"> 
        <div id='form-header'>
            <div id='title'>
            <h2>Login</h2>
            </div>
        </div>
      <form id='formulario' onSubmit={submit}>
        <div>
            <label >
            Username:
            <br />
            <input id='caixa' type="text" value={username} onChange={nome} placeholder="Digite seu username" required/>
            </label>
            <br />
            <label>
            Password:
            <br />
            <input id='caixa' type="password" value={password} onChange={senha}  placeholder="Digite sua senha" />
            </label>
            <br />
        
        <button type="submit">Login</button>
        {error && <div>{error}</div>}
        </div>

      </form>
    </div>
  );
};

export default Login;