import React from 'react';
import { connect } from 'react-redux';
import LeftSideBar from './sidebar/LeftSideBar';
import RightSideBar from './sidebar/RightSideBar';
import '../style.css'

const Dashboard = (props) => {
    return (
        <div className="wrapper">
            <div className="main">
               <LeftSideBar profileName={props.state.name} />
                <section className="dashboard">
                    {/* <h1>Dashboard</h1> */}
                    <div className="dashboard-card-holder ">
                    <div className="small-card">
                        <p className="title">Number of Business</p>
                        <p className="num">0</p>
                    </div>
                    <div className="small-card">
                        <p className="title">Number of Categories</p>
                        <p className="num">0</p>
                    </div>
                    
                    </div>
                    
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