import React, { useState } from 'react';
import { connect } from 'react-redux';
import LeftSideBar from './../sidebar/LeftSideBar';
import RightSideBar from './../sidebar/RightSideBar';
import { addCategory } from '../../actions';
import '../../style.css'

const Category = (props) => {
    const [ form, showForm ] = useState(false);
    const [category, setCategory] = useState('');
    const [ alert, setAlert ] = useState(false)

    
    function handleSubmit(e) {
        e.preventDefault();
        let randNum = Math.floor(Math.random() * 100)
        let data = {
            id:randNum,
            name:category
        }
        props.addCategory(data)
        setCategory('')
        setAlert(true)
    }

    return (
        <div className="wrapper">
            <div className="main">
               <LeftSideBar />
                <section className="dashboard">
                <h1 className="ft-left">Category</h1>
                    <div className="main-content">
                        <button className="btn-category" onClick={() => showForm(true)}>+ Add New Category </button>

                        {
                            form && (
                                <form className="form-holder" onSubmit={handleSubmit}>
                                    <input 
                                        type="text" 
                                        placeholder="Category name" 
                                        value={category}
                                        onChange={e => setCategory(e.target.value)}
                                    />
                                    <input type="submit" value="Add Category" className="btn-submit" />
                                </form>
                            )
                        }{ alert && (<div className="alert"> Category successfully added`</div>) }
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

export default connect(mapStateToProps,mapDispatchToProps)(Category)