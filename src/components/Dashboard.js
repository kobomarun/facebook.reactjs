import React from 'react';
import { connect } from 'react-redux'
import LeftSideBar from './sidebar/LeftSideBar';
import RightSideBar from './sidebar/RightSideBar';
import '../style.css'

const Dashboard = (props) => {
    console.log(props)
    return (
        <div className="wrapper">
            <div className="main">
               <LeftSideBar />
                <section className="dashboard">
                    <div className="dashboard-card-holder ">
                    <div className="small-card">
                        <p className="title">Number of Business</p>
                        <p className="num">0</p>
                    </div>
                    <div className="small-card">
                        <p className="title">Number of Categories</p>
                         <p className="num">{props.state.category.categories.length}</p>
                    </div>
                    
                    </div>
                    
                </section>
                <RightSideBar />
            </div>
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        state
    }
}

export default connect(mapStateToProps)(Dashboard)