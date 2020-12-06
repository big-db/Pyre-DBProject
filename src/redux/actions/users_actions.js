import {axiosAPI} from './axios';

import {
    GET_USER_REVIEWS,
    RETRIEVE_ERROR,
    LOADING_REVIEWS,
} from '../actionTypes'

export const getUserReviews = (reviewerID) => async dispatch => {
    dispatch({
        type: LOADING_REVIEWS
    })
    return axiosAPI.get(`/users/${reviewerID}`).then(res=>{
        dispatch(
            {
                type: GET_USER_REVIEWS,
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


