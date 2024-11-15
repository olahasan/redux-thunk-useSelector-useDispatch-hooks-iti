import { MINUS_NUMBER } from "./types";

const minus = (payload)=> ({
    type: MINUS_NUMBER,
    payload,
})
export default minus;