import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from '../../profile.png'
import '../../style.css'

const LeftSideBar = (props) => {
    console.log('props',props.state)
    return (
        <aside className="leftsidebar">
            <div className="details">
                <img src={Profile} alt="profile" />
                <div className="profile-name"> {props.state.name}</div>
            </div>
            <div className="menu">
               <div className="menu-item">
               <Link>Create Categories</Link>
               </div>
               <div className="menu-item">
               <Link>View All Categories</Link>
               </div>
               <div className="menu-item">
               <Link>Create Business</Link>
               </div>
               <div className="menu-item">
               <Link>View All Businesses</Link>
               </div>
            </div>
        </aside>
    )
}

const mapStateToProps = state => {
    
    return {
        state:JSON.parse(localStorage.getItem('auth'))
    }
}
export default connect(mapStateToProps)(LeftSideBar)