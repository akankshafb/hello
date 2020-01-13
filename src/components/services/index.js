// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// import SearchItem from '../SearchItem';


const dataList = async ()=>{
    let response = await fetch(
        `https://api.myjson.com/bins/qhnfp`
    )
    console.log("Serivce");
    let data = response.json();
    return data;

}

export default dataList;
// method: "GET",
// headers: new Headers({
//     Accept: "application/vnd.github.cloak-preview"
// })

// function DataList() {
//     const [itemList, updatedItemList] = useState([]);
//     var selectorItemid;
//     useEffect(() => {
//         fetch(
//             `https://api.myjson.com/bins/qhnfp`,
//             {
//                 method: "GET",
//                 headers: new Headers({
//                     Accept: "application/vnd.github.cloak-preview"
//                 })
//             }
//         )
//             .then(res => res.json())
//             .then(response => {
//                 response.salePrice = "test";

//                 updatedItemList(response);
//                 // console.log(response);
//             })
//             .catch(error => console.log(error));
//     }, []);

    
   
//     return itemList;

//     // return (
//     //     <div>
//     //         <div className="row margin-top20">
//     //             {
//     //                 itemList.map((c, index) =>

//     //                     <div className="col-sm-3" key={index}>
//     //                         <div className="itemBox">
//     //                             <div>
//     //                                 {/* <img src={data.img_url}/> */}
//     //                                 <img src="https://cdn2.vectorstock.com/i/thumb-large/88/26/no-image-available-icon-flat-vector-25898826.jpg" />
//     //                             </div>
//     //                             <div className="itemDetail">
//     //                                 <p>{c.name}</p>
//     //                                 <span className="Regularprice">${c.price}</span>
//     //                                 <span className="Saleprice">{c.price - (c.price * c.discount / 100)}</span>
//     //                                 <button className="btn-primary addToCartBtn" onClick={()=>this.props.childHandler('hello')}>Add to cart</button>
//     //                             </div>
//     //                         </div>
//     //                     </div>)
//     //             }
//     //         </div>
//     //         {/* <SearchItem itemid={selectorItemid}/> */}
//     //     </div>
//     // );
// }

// export default DataList;
