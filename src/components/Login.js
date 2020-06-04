import React,{ useState } from "react";
import { connect } from 'react-redux';
import  { Link } from 'react-router-dom'
import { Login_User } from '../actions/index'
import "../style.css";

function mapDispatchToState(dispatch) {
    return {
        Login_User: data => dispatch(Login_User(data))
    }
}

const Login = (props) => {
    const [ email, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    function handleLogin(e) {
        e.preventDefault();
        let data = {
            email,
            password
        }
console.log('my',data)
        props.Login_User(data)
    }
  return (
    <div className="login-form">
      <h1>Facebook</h1>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Email Address" onChange={e =>  setUsername(e.target.value)}  value={email} required />
        <input type="Password" placeholder="Password" onChange={ e =>  setPassword(e.target.value)} value={password} required />
        <div className="submit">
          <input type="submit" value="Login" />
        </div>
        <span className="forget-pass">
          <Link to="#">Forgot Password?</Link>
        </span>
      </form>
    </div>
  );
};



export default connect(null, mapDispatchToState)(Login);
