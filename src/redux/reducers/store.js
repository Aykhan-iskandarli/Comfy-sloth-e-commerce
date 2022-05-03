import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Thunk from "redux-thunk"
import rootReducers from './rootReducer';


const middleware = [Thunk]

const store = createStore( rootReducers, composeWithDevTools(applyMiddleware(...middleware)))


export default store