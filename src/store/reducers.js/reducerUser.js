import { GET_USERS_LIST } from '../types';


const userReducer = (state=[], action) =>{
    console.log(action);
        
    switch(action.type){
        case GET_USERS_LIST:
            return [...action.payload];
        default: 
            return state;
    }
};
export default userReducer;