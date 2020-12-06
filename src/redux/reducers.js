import {combineReducers} from 'redux';
import * as type from './actionTypes';


function singleBookReducer(state={},action){
    switch(action.type){
        case type.GET_BOOK:
            return {...action.payload}
        case type.GET_BOOK_IMAGE:
            return {...action.payload}
        case type.LOAD_BOOK:
            return {}
        default: return state;
    }
    
}

function multipleBookReducer(state=[],action){
    switch(action.type){
        case type.GET_WEEKLY:
            return [...action.payload]
        case type.GET_BOOKS_LIST:
            return [...action.payload]
        case type.LOADING_BOOKS:
            return null
        case type.RETRIEVE_BOOKS_ERROR:
            return []
        default:
            return state;       
    }
}
function multipleReviewReducer(state=[],action){
    switch (action.type){
        case type.GET_USER_REVIEWS:
            return [...action.payload]
        case type.GET_BOOK_REVIEWS:
            return [...action.payload]
        case type.LOADING_REVIEWS:
            return []
        default: return state
    }    
}
function singleReviewReducer(state={},action){
    switch (action.type){
        case type.GET_SPECIFIC_REVIEW:
            return {...action.payload}
        
        default: return state
    }    
}

const userAuthInitialState = {
    userAuth: false,
    user:{
        id:0,
        name:"placeholder",
        email:"placeholder@placeholder.com"
        
    },
    token:"placeholder"
}
function userAuthReducer(state=userAuthInitialState,action){
    switch(action.type){
        case type.USER_AUTH_SUCCESS:
            return {userAuth:true,...action.payload}
        case type.USER_AUTH_ERROR:
            return {userAuth:false}
        case type.USER_SIGN_OUT:
            return {userAuth:false}
        default:
            return state;     
          
    }
}
function userSignUpReducer(state={acknowledge:null},action){
    switch(action.type){
        case type.ADD_USER_SUCCESS:
            return {acknowledge:true}
        case type.ADD_USER_ERROR:
            return {acknowledge:false}
        default:
            return state;       
    }
}

function bookAddReducer(state={acknowledge:null},action){
    switch(action.type){
        case type.ADD_BOOK_SUCCESS:
            return {acknowledge:true}
        case type.ADD_BOOK_ERROR:
            return {acknowledge:false}
        case type.CLEAR_BOOK_ACK:
            return {acknowledge:null}
        default:
            return state;       
    }
}

function reviewAddReducer(state={acknowledge:null},action){
    switch(action.type){
        case type.ADD_REVIEW_SUCCESS:
            return {acknowledge:true}
        case type.ADD_REVIEW_ERROR:
            return {acknowledge:false}
        default:
            return state;       
    }
}
export const rootReducer = combineReducers({
    userAuthReducer,
    singleBookReducer,
    multipleBookReducer,
    singleReviewReducer,
    multipleReviewReducer,
    userSignUpReducer,
    bookAddReducer,
    reviewAddReducer
});