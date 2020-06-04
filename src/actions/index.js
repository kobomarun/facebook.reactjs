import { USER_LOGIN, ERROR_LOGIN } from './constants';
import { useHistory } from 'react-router-dom'


export const  Login_User =  user => async dispatch => {
    await fetch('https://rp1.54gene.com/api/user/signin', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(response => {
        if(response.success !== "false") {
            dispatch({
                type: USER_LOGIN,
                payload: response.data
            })
            localStorage.setItem('auth', JSON.stringify(response.data));
            
           window.location.href="/dashboard" 

        } else {
            dispatch({
                type: ERROR_LOGIN,
                text:'Error. Invalid Login Details'
            })
            alert(response.message)
        }
    })
    
}