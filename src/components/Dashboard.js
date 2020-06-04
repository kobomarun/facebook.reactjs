import React from 'react';
import '../style.css'
import Logo from '../logo.png';
import { useHistory } from 'react-router-dom'


const Dashboard = () => {
    const history = useHistory()

    const logOut = () => {
        alert('Logging out')
        localStorage.removeItem('auth');
        history.push('/')
    }
    return (
        <div className="wrapper">
            <div className="nav">
                <div className="nav-items">
                    <img src={Logo} />
                </div>
                <div className="nav-items">
                    <input type="text" className="searchform" placeholder="Search Faceclone" />
                </div>
                <div>
                    <button onClick={logOut}>logout</button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard