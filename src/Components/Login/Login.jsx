import React from 'react';
import '.././../CSS/Login.css'

function Login(props) {
  const { size = 'medium'} = props
  return (
    <form className= "App">
      <div className="form-inner">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input className={`input ${size} {...rest}`} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input className={`input ${size} {...rest}`} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password </label>
          <input className={`input ${size} {...rest}`} />
        </div>
        <div className="button">
        <button>LOGIN</button>
        </div>
      </div>
    </form>
  );
}

export default Login;
