import React, { useState } from 'react';

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

    <div>
      <form>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
          />
          <button
            type="button"
            disabled={verifyEmailAndPassword(email, password.length)}
            onClick={handleClick}
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
