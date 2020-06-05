import React, { useState } from 'react';
import { connect } from 'react-redux';
import LeftSideBar from './../sidebar/LeftSideBar';
import '../../style.css'

const ViewBusiness = (props) => {
    const { business }  = props.state.business;
    let count = 1;

    function deleteBusiness(id) {
        alert(id)
    }
    return (
        <div className="wrapper">
            <div className="main">
               <LeftSideBar />
                <section className="dashboard">
                <h1 className="ft-left">View Business</h1>
                    <div className="main-content">
                        <table className="business">
                            <thead>
                                <tr>
                                    <th>SN</th>
                                    <th>Business Name</th>
                                    <th>Phone Number</th>
                                    <th>Email</th>
                                    <th>Category</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    business.map((row, i) => {
                                        return (
                                            <tr>
                                                 <td>{count++}</td>
                                                <td>{row.name}</td>
                                                <td>{row.phone}</td>
                                                <td>{row.email}</td>
                                                <td>{row.categories.map(cat => (
                                                    <span key={cat.id}>{cat.name}, </span>
                                                ))}</td>
                                                <td><button>Edit</button> | 
                                                <button onClick={() => deleteBusiness(row.id)}>Delete</button></td>
                                                
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    
                </section>
            </div>
            
        </div>
    )
}



const mapStateToProps = state => {
    console.log(state.business)
    return  {
        state
    }
}

export default connect(mapStateToProps)(ViewBusiness)