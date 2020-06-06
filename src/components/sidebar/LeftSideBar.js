import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from '../../profile.png'
import '../../style.css'

const LeftSideBar = (props) => {
    return (
        <aside className="leftsidebar">
            <div className="details">
                <img src={Profile} alt="profile" />
                <div className="profile-name"> {props.state.user.email}</div>
            </div>
            <div className="menu">
               <div className="menu-item">
                    <Link to="/dashboard">Dashboard</Link>
               </div>
               <div className="menu-item">
                    <Link to="/add-category">Create Categories</Link>
               </div>
               <div className="menu-item">
                    <Link to="/">View All Categories</Link>
               </div>
               <div className="menu-item">
                    <Link to="/add-business">Create Business</Link>
               </div>
                    <div className="menu-item">
               <Link to="/view-business">View All Businesses</Link>
               </div>
            </div>
        </aside>
    )
}

const mapStateToProps = state => {
    
    return {
        state
    }
}
export default connect(mapStateToProps)(LeftSideBar)