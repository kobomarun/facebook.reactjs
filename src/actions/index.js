import { USER_LOGIN } from './constants';
import { Redirect } from 'react-router-dom';
export const  Login_User =  user => async dispatch => {
    console.log(user)
    await fetch('https://rp1.54gene.com/api/user/signin', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(response => {
        if(response.data.success) {
            dispatch({
                type: USER_LOGIN,
                payload: response.data
            })
            localStorage.setItem('auth', 1);
            
           window.location.href="/dashboard" 

        } else {
            alert(response.message)
        }
    })
    
}