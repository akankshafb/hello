// import {PRINT_HELLO} from '../actions/printHelloAction';
// import printHelloWorld from '../actions/printHelloAction'

const printHelloReducer=(state={message:'No Message'},{type,payload})=>{
    debugger;
    switch(type){
        case "PRINT_HELLO":
            return payload;
            default:
                return state;
    }
}



export default printHelloReducer;