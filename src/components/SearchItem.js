import React, { Component } from 'react';
import './searchItem.css';
import ItemList from './ItemList';
import { Link } from 'react-router-dom';
import imageCart from '../images/cart.png';
import printHelloWorld from '../actions/printHelloAction';
import setLocalStorageData from '../actions/setLocalStorageData';
import addTocart from '../actions/addToCart';
import {connect} from 'react-redux';

class SearchItem extends Component {
    constructor(props) {
        super(props);
        var dataList=JSON.parse(localStorage.getItem('dataList'));
        var totalCount=0;

        if(dataList===null){
            totalCount=0;
        }else{
            dataList.map((item)=>{
                totalCount=totalCount+item.qty;
            });
        }

        this.state = {
            count: totalCount,
            dataList: [],
            orderListNew: [],
            myCount:''
        }

    }

    /* Add To Cart Button Funtion */
    // childHandlerFunc = (val) => {
    //     this.state.orderListNew.push(val);
    //     this.getDataSummaryList(val);
    //     val.qty = 1;
    //     this.getDataList(val);
    //     this.setState({
    //         count: ++this.state.count,
    //         dataList: this.state.dataList,
    //         orderListNew: this.state.orderListNew
    //     })
    // }
/* to make list for Product summary table */
    // getDataList(val){
    //     const array = [];
    //     let array2=[];
    //     var dataList=JSON.parse(localStorage.getItem('dataList'));
    //     //var orderList=JSON.parse(localStorage.getItem('orderListNew'));
    //     array2=dataList;
    //     if(dataList===null){
    //         array.push(val);
    //         localStorage.setItem('dataList',JSON.stringify(array));
    //     }
    //     else if(dataList.length>=1){
    //         var flag=false;
    //         dataList.map((item)=>{
    //                     if(item.id===val.id){
    //                        // alert("Value Matched");
    //                         flag=true;
    //                         item.qty=item.qty+1;
    //                     }
    //             });
    //         if(flag===false){
    //             array2.push(val);
    //         }    
    //         localStorage.setItem('dataList',JSON.stringify(array2));
    //     }else{
    //         array.push(val);
    //         localStorage.setItem('dataList',JSON.stringify(array));
    //        // console.log(localStorage.getItem('dataList'));
    //     } 
    // }

/* Make list for total item and total price calculation */

    // getDataSummaryList(val){
    //     debugger;
    //     const array = [];
    //     let array2=[];
    //     var dataListSummary=JSON.parse(localStorage.getItem('dataListSummary'));
    //     array2=dataListSummary;
    //     if(dataListSummary===null){
    //         array.push(val);
    //         localStorage.setItem('dataListSummary',JSON.stringify(array));
    //     }else if(dataListSummary.length>=1){
    //         array2.push(val);
    //         localStorage.setItem('dataListSummary',JSON.stringify(array2));
    //     }
    // }

    componentDidUpdate(){
        
    //var myCount=parseInt(nextState.count)+1;
    //alert("",this.state.count);
    // if(nextState.count !== this.state.myCount){
    //     this.updateState(myCount);
    // }
    }

    // updateState =(myCount) => {
    //     this.setState({
    //         myCount:myCount
    //     })
    // }

    getCount=(val)=>{
      alert("Hiiiii",val);
        
    }
    myFunction=(val)=>{
        alert("Hi I am Ak");
    }

render() {
  // console.log("this.props.addTocart__",this.props);
    //this.getCount();
        const { count,myCount } = this.state;
        //this.props.loadCount();
        return (
            <div>
                <div className="row HeaderStyle">
                    <div className="col-sm-4">
                        <h2>All Items</h2>
                    </div>
                    <div className="col-sm-4">
                    </div>
                    <div className="col-sm-4">
                        <Link to={
                            {
                                pathname: '/OrderSummary',
                            }
                        } className="GoToLink">
                    <span className="itemCount">{count} {myCount}</span>
                            <img src={imageCart} width="50" height="50" className="cartImage" />
                        </Link>
                    </div>
                </div>
                <div className="">
                    <div className="container bgItemList">
                        {/* <ItemList childHandler={(e) => { this.childHandlerFunc(e) }} testCount={(e)=>{this.getCount(e)}} /> */}
                        <ItemList addTocart={(e) => { this.myFunction(e) }} />
                    </div>
                </div>
                <div className="">
                    <div className="container">
                        <p className="copyright">@Copyright</p>
                        <button onClick={this.getCount()}>Click me</button>
                        {/* {this.props.message}
                        {this.props.addTocart} */}
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps={
    printHelloWorld,
    addTocart
  
   // loadCount
}
const mapStateToProps=(state)=>{
    debugger;
    console.log("mapActionToProps",JSON.stringify(state.data));
    return state;
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchItem);
