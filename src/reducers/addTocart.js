// import {PRINT_HELLO} from '../actions/printHelloAction';
// import printHelloWorld from '../actions/printHelloAction'
var initialState=[];
const addTocart=(state=initialState,{type,payload})=>{
    debugger;
    switch(type){
        case "ADD_TO_CART":
            /* set data in dataListSummary localStorage */
            const array = [];
            var array2=[];
            var dataListSummary=JSON.parse(localStorage.getItem('dataListSummary'));
            array2=dataListSummary;
            if(dataListSummary===null){
                array.push(payload);
                localStorage.setItem('dataListSummary',JSON.stringify(array));
            }else if(dataListSummary.length>=1){
                array2.push(payload);
                localStorage.setItem('dataListSummary',JSON.stringify(array2));
             }

             /* set data in DataList localStorage */
             const arrayDataList = [];
             let arrayDataList2=[];
             payload.qty = 1;
             var dataList=JSON.parse(localStorage.getItem('dataList'));
                arrayDataList2=dataList;
                if(dataList===null){
                    arrayDataList.push(payload);
                    localStorage.setItem('dataList',JSON.stringify(arrayDataList));
                }
                else if(dataList.length>=1){
                    var flag=false;
                    dataList.map((item)=>{
                                if(item.id===payload.id){
                                // alert("Value Matched");
                                    flag=true;
                                    item.qty=item.qty+1;
                                }
                        });
                    if(flag===false){
                        arrayDataList2.push(payload);
                    }    
                    localStorage.setItem('dataList',JSON.stringify(arrayDataList2));
                }else{
                    arrayDataList.push(payload);
                    localStorage.setItem('dataList',JSON.stringify(arrayDataList));
                }
                
        //var dataList=JSON.parse(localStorage.getItem('dataList'));
        var totalCount=0; 
        debugger;       
        if(dataList===null){
            totalCount=0;
        }else{
            dataList.map((item)=>{
                totalCount=totalCount+item.qty;
            });
        }
        console.log("totalCount__",totalCount);
                
            return totalCount;
            default:
                return state;
    }

   
}
export default addTocart;

