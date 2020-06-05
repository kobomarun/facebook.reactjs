import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Multiselect } from 'multiselect-react-dropdown';
import LeftSideBar from './../sidebar/LeftSideBar';
import RightSideBar from './../sidebar/RightSideBar';
import { addCategory } from '../../actions';
import '../../style.css'
import {useRegistrationForm} from './useRegistrationForm'

const Business = (props) => {
    const [ form, showForm ] = useState(false);
    const [ category, getCategory ] = useState([])
    const [ alert, setAlert ] = useState(false);
    const {inputs, handleInputChange, handleSubmit} = useRegistrationForm();
    function onSelect(selectedList, selectedItem) {
        inputs.categories = selectedList
        console.log(inputs)
    }
  console.log('in',inputs)
    return (
        <div className="wrapper">
            <div className="main">
               <LeftSideBar />
                <section className="dashboard">
                <h1 className="ft-left">Category</h1>
                    <div className="main-content">
                        <button className="btn-category" onClick={() => showForm(true)}>+ Click to Add New Business </button>

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
                                        value={inputs.website}
                                        onChange={handleInputChange}
                                        
                                    />
                                    
                                    <textarea placeholder="Business Description" name="description"></textarea>
                                    <Multiselect
                                        options={props.state.category.categories} 
                                        selectedValues={category} 
                                        onSelect={onSelect} // Function will trigger on select event
                                        // onRemove={this.onRemove} // Function will trigger on remove event
                                        displayValue="name" // Property name to display in the dropdown options
                                    />
                                    <input type="submit" value="Add Category" className="btn-submit" />
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
        addCategory: data => dispatch(addCategory(data))
    }
}

const mapStateToProps = state => {
    console.log('cat', state)
    return  {
        state
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Business)