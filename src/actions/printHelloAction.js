//export const PRINT_HELLO='print-hello';
const printHelloWorld=()=>{
   //console.log("Hello Action..");
    return {type:"PRINT_HELLO",payload:{message:'Hello World!'}};
}
export default printHelloWorld;