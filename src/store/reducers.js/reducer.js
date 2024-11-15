import { ADD_NUMBER, MINUS_NUMBER } from "../types";


const reducer = (state= 0 , action) => {
  switch (action.type) {
    case ADD_NUMBER:
        return  action.payload + 1;
    case MINUS_NUMBER:
        return action.payload  - 1;  
    default:    
        return state;
  }
}
export default reducer