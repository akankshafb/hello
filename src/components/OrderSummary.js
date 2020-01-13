import React, { Component} from 'react';
import './orderSummary.css';
class OrderSummary extends Component {
    constructor(props) {
        super(props);
        var dataList=JSON.parse(localStorage.getItem('dataList'));
        var dataListSummary=JSON.parse(localStorage.getItem('dataListSummary'));
        console.log(dataList);
        this.state={
            orderList:dataList,
            totalItem:dataListSummary
        }
        this.myQtyRef = React.createRef();
    }
    

    componentDidMount() {
        this.setState({
            orderList:this.state.orderList,
            totalItem:this.state.totalItem
        })
    }
    componentWillMount() {
      
    }
    /* Add quantity */
    changeQty(itemId, task,itemList){
        let itemsCopy = Object.assign([], this.state.orderList);
        let totalItemCopy = Object.assign([], this.state.totalItem);
        itemsCopy.map((item)=>{
            if(item.id==itemId){
                item.qty=(task == 'add')?parseInt(item.qty)+1:((item.qty!=1)?parseInt(item.qty)-1:parseInt(item.qty));
                if(task=='add'){
                    totalItemCopy.push(item);
                }else{
                    totalItemCopy.pop(-1);
                }
                this.setState({
                    totalItem:totalItemCopy,
                     orderList:itemsCopy
                })
                console.log("New List",this.state.totalItem);
            }
            return true;
        })
        this.setState({
        })
    }
    render() {
//        console.log("Location Data",this.props.location.orderListNew);
  //      debugger;
  console.log("this.state.orderList__",this.state.orderList);
        var totalItem = this.state.totalItem;
        var totalPrice = 0;
        var totalDiscount = 0;
        var orderTotal = 0;
            for (var i = 0; i < totalItem.length; i++) {
                let afterDiscountPrice = totalItem[i].price - (totalItem[i].price * totalItem[i].discount / 100);
                let discount = totalItem[i].price - afterDiscountPrice;
                totalPrice = (totalPrice + totalItem[i].price)-discount;
                totalDiscount = totalDiscount + discount;
            }
        orderTotal = totalPrice;
        return (
            <div className="container">
                <div className="row HeaderStyle">
                    <div className="col-sm-4">
                        <h2>Order Summary</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8 bgWhite rightBorder">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Item({totalItem.length})</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Discount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    
                                this.state.orderList.map((orderList, index) => 
                                <tr key={index}>
                                    <td>{orderList.name}</td>
                                    <td>
                                        <input type="button" value="-" onClick={(e)=>this.changeQty(orderList.id,'substract',orderList)}/>
                                        <input type="text" value={orderList.qty} readOnly  className="itemQty" ref={this.myQtyRef}/>
                                        <input type="button" value="+" onClick={(e)=>this.changeQty(orderList.id,'add',orderList)} />
                                    </td>
                                   <td>{(orderList.price - (orderList.price * orderList.discount / 100))*orderList.qty}</td>
                                    <td>{(orderList.price-(orderList.price - (orderList.price * orderList.discount / 100)))*orderList.qty}</td>
                                    </tr>)}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-sm-4 bgWhite">
                        <p><b>Total</b></p>
                        <p>Item({totalItem.length}) :  {totalPrice}</p>
                        <p>Discount : {totalDiscount}</p>
                        <br />
                        <p>Order Total : {orderTotal}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderSummary;