import React from 'react';
import { Link } from 'react-router-dom'
import Profile from '../../profile.png'
import '../../style.css'

const LeftSideBar = (props) => {
    return (
        <aside className="leftsidebar">
            <div className="details">
                <img src={Profile} alt="profile" />
                <div className="profile-name"> {props.profileName}</div>
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

export default LeftSideBar;