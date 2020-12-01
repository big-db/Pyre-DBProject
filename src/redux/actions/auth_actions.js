import axios from 'axios';
import{
    USER_AUTH_SUCCESS,
    USER_AUTH_ERROR,
    RETRIEVE_ERROR,
} from '../actionTypes';

export const authCheck = (email,password) => async dispatch => {
    
        return axios.post(process.env.REACT_APP_API_URL+"/auth/login",{"email":email,"password":password}).then(res =>{
            console.log(res)
            if(res.status === 200){
                dispatch(
                    {
                        type: USER_AUTH_SUCCESS,
                        payload: res.data
                    }
                )
            }
        }).catch(err =>{
            dispatch(
                {
                    type: USER_AUTH_ERROR,
                }
            )
        })
}