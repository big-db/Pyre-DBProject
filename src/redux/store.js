import { createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import {rootReducer} from "./reducers";
import {loadState, saveState} from './sessionStorage';
import { composeWithDevTools } from 'redux-devtools-extension'


const persistedState = loadState();

const mainstore = createStore(
    rootReducer,
    persistedState,  
    composeWithDevTools(applyMiddleware(thunkMiddleware))
);
export default mainstore;

mainstore.subscribe(() => {
    saveState( mainstore.getState() );
  });