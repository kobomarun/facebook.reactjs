import  {useState} from 'react'
import {  addBusiness } from '../../actions/'
import { connect } from 'react-redux';

 export const useRegistrationForm = (props) => {
   console.log('re',props)
    const [inputs, setInputs] = useState({});
    const handleSubmit = (event) => {
      if (event) {
        event.preventDefault();
        console.log('from', inputs);
         addBusiness(inputs)
        
      }
    }
    const handleInputChange = (event) => {
      event.persist();
      setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }
    return {
      handleSubmit,
      handleInputChange,
      inputs
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      addBusiness: data => dispatch(addBusiness(data))
    }
  }

 

  export default connect(null,mapDispatchToProps)(useRegistrationForm)