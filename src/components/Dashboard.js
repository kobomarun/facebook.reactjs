import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import LeftSideBar from './sidebar/LeftSideBar';
import RightSideBar from './sidebar/RightSideBar';
import '../style.css'

const Dashboard = (props) => {
   const business = props.state.business.business;
   const category = props.state.category.categories;
    return (
        <div className="wrapper">
            <div className="main">
               <LeftSideBar />
                <section className="dashboard">
                    <div className="dashboard-card-holder ">
                    <div className="small-card">
                        <p className="title">Number of Business</p>
                         <p className="num">{business.length}</p>
                         {
                          business.length === 0 ? (
                              <p className="empty">No Business has been created.<Link to="/add-business"> Click here to create business</Link></p>
                          )   :''
                         }
                    </div>
                    <div className="small-card">
                        <p className="title">Number of Categories</p>
                        {
                            
                        }
                         <p className="num">{category.length}</p>
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