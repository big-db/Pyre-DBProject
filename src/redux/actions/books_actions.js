import axios from 'axios';

import{
    GET_WEEKLY,
    GET_BOOK,
    GET_BOOK_IMAGE,
    ADD_BOOK,
    GET_RECOMMEND,
    RETRIEVE_ERROR,
    ADD_ERROR,
    GET_BOOKS_LIST,
} from '../actionTypes'

export const getWeekly = () => async dispatch => {
    return axios.get("\\"+process.env.REACT_APP_API_URL+"/metadata/weekly").then( res => {
      dispatch(
          {
              type: GET_WEEKLY,
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

export const getBookMeta = (asin) => async dispatch => {
      return axios.get("\\"+process.env.REACT_APP_API_URL+"/metadata/detail/"+asin).then( res => {
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
    return axios.get("\\"+process.env.REACT_APP_API_URL+"/metadata/image/"+asin).then( res => {
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
    return axios.get("\\"+process.env.REACT_APP_API_URL+"/metadata/search?"+(key ? "key=" + key+"&":"")+(sort ? "sort=" + sort+"&":"")+"page="+page).then( res => {
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


export const addBook = (book, auth) => async dispatch => {
    try{
        const res = await axios.post("\\"+process.env.REACT_APP_API_URL+"/metadata",{
            auth: {
              username: auth.username,
              password: auth.password,
            },
            data: book            
          })
        dispatch(
            {
                type: ADD_BOOK,
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
export const getBooksList = (page, modifier) => async dispatch => {
    try{
        const res = await axios.get("\\"+process.env.REACT_APP_API_URL+"/metadata?"+(modifier ? "sort=" + modifier + "&":"")+"page="+page)
        dispatch(
            {
                type: GET_BOOKS_LIST,
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