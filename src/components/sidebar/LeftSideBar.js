import React from 'react';
import Profile from '../../profile.png'
import '../../style.css'

const LeftSideBar = (props) => {
    return (
        <aside className="leftsidebar">
            <div className="details">
                <img src={Profile} alt="profile" />
                <div className="profile-name"> {props.profileName}</div>
            </div>
        </aside>
    )
}

export default LeftSideBar;