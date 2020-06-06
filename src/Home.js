import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile.png'
import LeftSideBar from './components/sidebar/LeftSideBar';
import './style.css'

const Home = (props) => {
   
    return (
        <div className="wrapper">
            <div className="main">
               <LeftSideBar />
                <section className="dashboard">
                <h1 className="ft-left">Business Directory</h1>
                    <div className="home-cardholder">
                        { props.state.business.business.map(row => {
                            return (
                                <div className="card">
                                    <img src={Profile} alt=""  width="150"/>
                                    <div className="title">
                                        {row.name}
                                    </div>
                                    <div className="email">
                                        Email:{row.email}
                                    </div>
                                    <div className="phone">
                                        Email:{row.phone}
                                    </div>
                                    <div className="description">
                                        {row.description}
                                    </div>
                                </div>
                            )
                        })}
                        
                    </div>            
                </section>
            </div>
            
        </div>
    )
}


const mapStateToProps = state => {
    console.log('cat', state)
    return  {
        state
    }
}

export default connect(mapStateToProps)(Home)