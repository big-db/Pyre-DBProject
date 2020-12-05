import {axiosAPI} from './axios';

import {
 GET_BOOK_REVIEWS,
 GET_SPECIFIC_REVIEW,
 RETRIEVE_ERROR,
} from '../actionTypes'

export const getReview = (reviewerID,asin) => async dispatch => {

    return axiosAPI.get(`/reviews/${reviewerID}/${asin}`).then(res => {
        dispatch(
            {
                type: GET_SPECIFIC_REVIEW,
                payload: res.data
            }
        ).catch(err =>{
            dispatch({
                type: RETRIEVE_ERROR,
                payload: console.log(err)
            })
        })
    })
    
}

export const getBookReview = (asin) => async dispatch => {
    return axiosAPI.get(`/reviews/${asin}`).then(res => {
        dispatch(
            {
                type: GET_BOOK_REVIEWS,
                payload: res.data
            }
        )
    }).catch(err =>{
        dispatch({
               type: RETRIEVE_ERROR,
               payload: console.log(err)
        })
    })
}
