import {axiosAPI} from './axios';

import {
    GET_USER,
    UPDATE_USER,
    RETRIEVE_ERROR,
} from '../actionTypes'

export const getUser = (reviewerID,asin) => async dispatch => {
    return axiosAPI.get(`/${reviewerID}/${asin}`).then(res=>{
        dispatch(
            {
                type: GET_USER,
                payload: res.data
            }
        )
    }).catch(e => {
        dispatch({
               type: RETRIEVE_ERROR,
               payload: console.log(e)
        })
    })
}



export const updateUser = (user, reviewerID, auth) => async dispatch => {
    try{
        const res = await axiosAPI.put(`/user/${reviewerID}`,{
            auth: {
              username: auth.username,
              password: auth.password,
            },
            data: user            
          })
        dispatch(
            {
                type: UPDATE_USER,
                payload: res.data
            }
        )
    }
    catch(e){
        dispatch({
               type: RETRIEVE_ERROR,
               payload: console.log(e)
        })
    }
}

