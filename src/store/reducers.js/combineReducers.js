import { combineReducers } from 'redux';
// import reducer from '../reducer';
// import userReducer from '../reducerUser';
import reducer from './reducer';
import userReducer from './reducerUser';


const allResducers =  combineReducers ({
    myReducer : reducer,
    users : userReducer
})

export default allResducers
