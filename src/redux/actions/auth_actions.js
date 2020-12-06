import {axiosAPI} from './axios';
import{
    USER_AUTH_SUCCESS,
    USER_AUTH_ERROR,
    ADD_USER_SUCCESS,
    ADD_USER_ERROR,
    USER_SIGN_OUT,
} from '../actionTypes';

export const authCheck = (email,password) => async dispatch => {
    
        return axiosAPI.post(`/auth/login`,{"email":email,"password":password}).then(res =>{
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

export const authSignOut = () => dispatch => {
    dispatch({
        type: USER_SIGN_OUT,
    })
}

export const authSignUp = (email, password, name) => async dispatch => {
    
    return axiosAPI.post(`/auth/signup`,{"email":email,"password":password,"name":name}).then(res =>{
        if(res.status === 200){
            dispatch(
                {
                    type: ADD_USER_SUCCESS,
                    payload: res.data
                }
            )
            dispatch(authCheck(email,password))
        }
    }).catch(err =>{
        dispatch(
            {
                type: ADD_USER_ERROR,
            }
        )
    })
}