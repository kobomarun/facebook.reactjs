import React from 'react';
import { connect } from 'react-redux'
import '../style.css'
import { useHistory } from 'react-router-dom'
import LeftSideBar from './sidebar/LeftSideBar';
import RightSideBar from './sidebar/RightSideBar';
import Nav from './Nav';


const Dashboard = (props) => {
    const history = useHistory()

    const logOut = () => {
        alert('Logging out')
        localStorage.removeItem('auth');
        history.push('/')
    }
    return (
        <div className="wrapper">
            <Nav logOut={logOut}/>
            <div className="main">
               <LeftSideBar profileName={props.state.name} />
                <section>
                    Main Section
                </section>
                <RightSideBar />
            </div>
            
        </div>
    )
}

const mapStateToProps = state => {
    console.log('all',state);
    return {
        state:JSON.parse(localStorage.getItem('auth'))
    }
}

export default connect(mapStateToProps)(Dashboard)