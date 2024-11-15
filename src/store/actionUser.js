// import { ADD_NUMBER } from './types';
// import { type } from '@testing-library/user-event/dist/type';
import axios from 'axios';
import { GET_USERS_LIST } from './types';

const actionUsersList = () => async(dispatch)=>{
    try{
        const response = await axios.get(`https://fakestoreapi.com/users`);
        console.log(response);
        
        dispatch({
            type : GET_USERS_LIST,
            payload : response.data,
        })
    }catch (error){
       console.log(error);
    }

    // const response = axios.get('https://jsonplaceholder.typicode.com/users')
}
export default actionUsersList;

// export default actionUsersList;

