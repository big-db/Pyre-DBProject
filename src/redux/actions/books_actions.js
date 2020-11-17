import axios from 'axios';

import{
    GET_WEEKLY,
    GET_BOOK,
    SEARCH_BOOK,
    ADD_BOOK,
    GET_RECOMMEND,
} from '../actionTypes'

export const getBook = (book) =>({
    type: GET_BOOK,
    payload:{
        ...book
    }
});

export const searchBook = (books) =>({
    typ: SEARCH_BOOK,
    payload:{
        books
    }
});

