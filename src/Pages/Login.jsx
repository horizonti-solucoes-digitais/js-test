import React, { useState } from 'react';
import '../styles/login.css';

const Login = (props) => {
  const [user, setUser] = useState({ email: '', password: '' });

  const verifyEmailAndPassword = (email, password) => {
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    const minCaracteres = 6;
    const result = emailRegex.test(email) && password >= minCaracteres;
    return !result;
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  };

  const handleClick = () => {
    const { history } = props;
    history.push('/home');
  };

  const { email, password } = user;
  return (

    <div className="flex-box">
      <div className="container-box">
        <form>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
              placeholder="Email"
              className="form-control form-control-lg input-login"
            />
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
              className="form-control form-control-lg input-login"
            />
            <button
              type="button"
              disabled={verifyEmailAndPassword(email, password.length)}
              onClick={handleClick}
              className="btn btn-info button-login"
            >
              Entrar
            </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
