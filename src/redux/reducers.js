import {combineReducers} from 'redux';
import * as type from './actionTypes';


function userReducer(state={},action){
    if (action.type===type.GET_USER){
        return {
            user: action.user
        }
    }
return state;
}

function singleBookReducer(state={},action){
    
}

function multipleBookReducer(state={},action){
    
}

function reviewReducer(state={},action){

}

function userAuthReducer(state={},action){
    switch(action.type){
        case type.USER_AUTH_SUCCESS:
            return {userAuth:true}
        case type.USER_AUTH_ERROR:
            return {userAuth:false}
        default:
            return state;       
    }
}

export const rootReducer = combineReducers({
    userAuthReducer,
});