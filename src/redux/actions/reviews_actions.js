import {axiosAPI} from './axios';

import {
 GET_BOOK_REVIEWS,
 GET_SPECIFIC_REVIEW,
 RETRIEVE_ERROR,
 LOADING_REVIEWS,
 ADD_REVIEW_SUCCESS,
 ADD_REVIEW_ERROR,
 CLEAR_REVIEW_ACK,
} from '../actionTypes'

export const getReview = (reviewerID,asin) => async dispatch => {

    return axiosAPI.get(`/reviews/${reviewerID}/${asin}`).then(res => {
        dispatch(
            {
                type: GET_SPECIFIC_REVIEW,
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

export const getBookReview = (asin,page,modifier) => async dispatch => {
    dispatch({
        type:LOADING_REVIEWS
    })
    return axiosAPI.get(`/reviews/${asin}?${(modifier ? "sort=" + modifier + "&":"")}page=${page}`).then(res => {
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


export const addReview = (reviewerID,asin,reviewD,authtoken) => async dispatch => {
    return await axiosAPI.post(`/reviews/${reviewerID}/${asin}`,{review: reviewD},{
            headers: { Authorization: `Bearer ${authtoken}` },
             
          },).then(res =>{
            dispatch(
                {
                    type: ADD_REVIEW_SUCCESS,
                    payload: res.data
                }
            )
          }).catch(err=>{
            dispatch({
                type: ADD_REVIEW_ERROR,
                payload: console.log(err)
            })
          })

}

export const clearReviewACK = () => dispatch => {
    dispatch({
        type:CLEAR_REVIEW_ACK
    })
}