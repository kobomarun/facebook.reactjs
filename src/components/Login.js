import React,{ useState } from "react";
import { connect } from 'react-redux';
import  { Link } from 'react-router-dom'
import "../style.css";


const Login = (props) => {
    const [ email, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [text, setLoginText ] =useState('Login')
    function handleLogin(e) {
        e.preventDefault();
        setLoginText("Please wait....")
        console.log(props.state.user.password, password)

        if(email == props.state.user.email && props.state.user.password === password) {
          alert('Login Successful')
          localStorage.setItem('auth',1)
          props.history.push("/dashboard")
          // window.location.href="/dashboard" 
      } else {
          alert('invalid credentials')
          setLoginText("Login")

      }
    }
  return (
    <div className="login-form">
      <h1>Login To Admin Portal</h1>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Email Address" onChange={e =>  setUsername(e.target.value)}  value={email} required />
        <input type="Password" placeholder="Password" onChange={ e =>  setPassword(e.target.value)} value={password} required />
        <div className="submit">
          <input type="submit" value={text} />
        </div>
        <span className="forget-pass">
          <Link to="#">Forgot Password?</Link>
        </span>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
      state
  }
}


export default connect(mapStateToProps)(Login);
