import { ADD_NUMBER } from './types';

const Add = (payload) => ({
    type : ADD_NUMBER,
    payload,
})
export default Add;