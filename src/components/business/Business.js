import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Multiselect } from 'multiselect-react-dropdown';
import LeftSideBar from './../sidebar/LeftSideBar';
import RightSideBar from './../sidebar/RightSideBar';
import { addCategory } from '../../actions';
import {  addBusiness } from '../../actions/'

import '../../style.css'

const Business = (props) => {
    const allCategory = props.state.category.categories;
    const [ form, showForm ] = useState(false);
    const [ category, getCategory ] = useState([])
    const [ alert, setAlert ] = useState(false);
    const [inputs, setInputs] = useState({});

    const handleSubmit = (event) => {
      if (event) {
        event.preventDefault();
        console.log('from', inputs);
         props.addBusiness(inputs)
         setInputs({
             name:'',
             website:'',
             email:'',
             description:'',
             image:'',
             phone:''
         })
         getCategory([])
        
      }
    }
    const handleInputChange = (event) => {
      event.persist();
      let id = Math.floor(Math.random() * 1000)
      inputs.id = id;
      setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }
    function onSelect(selectedList, selectedItem) {
        inputs.categories = selectedList
        console.log(selectedItem)
    }
  console.log('in',props)
    return (
        <div className="wrapper">
            <div className="main">
               <LeftSideBar />
                <section className="dashboard">
                <h1 className="ft-left">Category</h1>
                    <div className="main-content">
                    {
                          allCategory.length == 0 ? (
                              <p>No category has been created yet.<Link to="/add-category"> Click here to create category</Link></p>
                          )   : <button className="btn-category" onClick={() => showForm(true)}>+ Click to Add New Business </button>

                         }

                        {
                            form && (
                                <form className="form-holder" onSubmit={handleSubmit}>
                                    <input 
                                        type="text"
                                        name="name" 
                                        placeholder="Enter Business Name" 
                                        value={inputs.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <input 
                                        type="text" 
                                        placeholder="Business Email" 
                                        name="email"
                                        value={inputs.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                     <input 
                                        type="text" 
                                        placeholder="Business Phone Number" 
                                        name="phone"
                                        value={inputs.phone}
                                        onChange={handleInputChange}
                                        required
                                    />
                                     <input 
                                        type="text" 
                                        placeholder="Website" 
                                        name="website"
                                        value={inputs.website}
                                        onChange={handleInputChange}
                                        
                                    />
                                     <input 
                                        type="file" 
                                        placeholder="Website" 
                                        name="image"
                                        value={inputs.image}
                                        onChange={handleInputChange}
                                        
                                    />
                                    
                                    <textarea placeholder="Business Description" name="description" onChange={handleInputChange}></textarea>
                                    <Multiselect
                                        options={props.state.category.categories} 
                                        selectedValues={category} 
                                        onSelect={onSelect} 
                                        displayValue="name"
                                    />
                                    <input type="submit" value="Save Business" className="btn-submit" />
                                </form>
                            )
                        }{ alert && (<div className="alert"> Category successfully added</div>) }
                    </div>
                    
                </section>
                <RightSideBar />
            </div>
            
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCategory: data => dispatch(addCategory(data)),
        addBusiness: data => dispatch(addBusiness(data))
    }
}

const mapStateToProps = state => {
    console.log('cat', state)
    return  {
        state
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Business)