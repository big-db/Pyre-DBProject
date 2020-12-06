import {axiosAPI} from './axios';

import{
    GET_WEEKLY,
    GET_BOOK,
    GET_BOOK_IMAGE,
    RETRIEVE_ERROR,
    GET_BOOKS_LIST,
    LOADING_BOOKS,
    ADD_BOOK_SUCCESS,
    ADD_BOOK_ERROR,
    CLEAR_BOOK_ACK,
    LOAD_BOOK,
    RETRIEVE_BOOKS_ERROR
} from '../actionTypes'

export const getWeekly = () => async dispatch => {
    dispatch({
        type:LOADING_BOOKS
    })
    return axiosAPI.get(`/metadata/weekly`).then( res => {
      dispatch(
          {
              type: GET_WEEKLY,
              payload: res.data
          }
      )
    }).catch(err =>{
      dispatch({
          type: RETRIEVE_BOOKS_ERROR,
          payload: console.log(err)
      })
  })
      
}

export const getBookMeta = (asin) => async dispatch => {
    dispatch({
        type:LOAD_BOOK
    })
      return axiosAPI.get(`/metadata/detail/${asin}`).then( res => {
        dispatch(
            {
                type: GET_BOOK,
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



export const getBookImage = (asin) => async dispatch => {
    return axiosAPI.get(`/metadata/image/${asin}`).then( res => {
        dispatch(
            {
                type: GET_BOOK_IMAGE,
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

export const searchBook = (page,key,sort) => async dispatch => {
    dispatch({
        type:LOADING_BOOKS
    })
    return axiosAPI.get(`/metadata/search?${(key ? "key=" + key+"&":"")}${(sort ? "sort=" + sort+"&":"")}page=${page}`).then( res => {
        dispatch(
            {
                type: GET_BOOKS_LIST,
                payload: res.data
            }
        )
    }).catch(err=>{
        dispatch({
            type: RETRIEVE_ERROR,
            payload: console.log(err)
        })
    })
}

export const getBooksCatList = (page,key) => async dispatch => {
    dispatch({
        type:LOADING_BOOKS
    })
    key = key.replace(' ','%20')
    return axiosAPI.get(`/metadata/filter/${key}?page=${page}`).then( res => {
        dispatch(
            {
                type: GET_BOOKS_LIST,
                payload: res.data
            }
        )
    }).catch(err=>{
        dispatch({
            type: RETRIEVE_BOOKS_ERROR,
            payload: console.log(err)
        })
    })
}


export const addBook = (bookD, authtoken) => async dispatch => {
    return await axiosAPI.post(`/metadata/`,{book: bookD},{
            headers: { Authorization: `Bearer ${authtoken}` },
             
          },).then(res =>{
            dispatch(
                {
                    type: ADD_BOOK_SUCCESS,
                    payload: res.data
                }
            )
          }).catch(err=>{
            dispatch({
                type: ADD_BOOK_ERROR,
                payload: console.log(err)
            })
          })

}

export const clearBookACK = () => dispatch => {
    dispatch({
        type:CLEAR_BOOK_ACK
    })
}
export const getBooksList = (page, modifier) => async dispatch => {
        dispatch({
            type:LOADING_BOOKS
        })
        return axiosAPI.get(`/metadata?${(modifier ? "sort=" + modifier + "&":"")}page=${page}`).then( res=>{
            dispatch(
                {
                    type: GET_BOOKS_LIST,
                    payload: res.data
                }
            )
        }).catch(e=>{
            dispatch({
                type: RETRIEVE_BOOKS_ERROR,
                payload: console.log(e)
         })
    })
    
    
}