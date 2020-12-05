import {axiosAPI} from './axios';
import { GET_LOGS, 
         ADD_LOGS,
         REVISIT_LOGS,
         RETRIEVE_ERROR,
         ADD_ERROR,
        } from '../actionTypes';

export const getLogs = (reviewerID, auth) => async dispatch => {
    try{
        const res = await axiosAPI.post(`/logs/${reviewerID}`,{
            auth: {
              username: auth.username,
              password: auth.password,
            },           
          })
        dispatch(
            {
                type: GET_LOGS,
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

export const addLogs = (logs, auth) => async dispatch => {
    try{
        const res = await axiosAPI.post(`/logs/`,{
            auth: {
              username: auth.username,
              password: auth.password,
            },
            data: logs,           
          })
        dispatch(
            {
                type: ADD_LOGS,
                payload: res.data
            }
        )
    }
    catch(e){
        dispatch({
               type: ADD_ERROR,
               payload: console.log(e)
        })
    }
}
       
        