import React, { Component } from 'react';
import './ItemList.css';
import services from './services/';
import addTocart from '../actions/addToCart';
import {connect} from 'react-redux';


class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: []
            //errorMsg: ''
        }
    }

    componentDidMount(){
        services().then((data)=>{
            console.log('data', data);
            this.setState({
                itemList: data
            })
        })
    }

    testCount=()=>{
        let count=10;
        alert(count);
       // return count;
    }

    myAddCartFunc=(c)=>{
        this.props.addTocart(c);
        alert(this.props.addTocart);
        this.testCount();
    }

    render() {
        const {itemList} = this.state;
        //this.testCount();
       // console.log("ItemList");
        return (
        
                
                <div className="row margin-top20">
                 {
                    itemList.length && itemList.map((c, index) =>
                        <div className="col-sm-3" key={index}>
                            <div className="itemBox">
                                <div>
                                    <img src="https://oxygenphones.com/wp-content/uploads/2018/04/Red-iPhone-8.png" className="productImage" alt="myimage" />
                                </div>
                                <div className="itemDetail">
                                    <p>{c.name} </p>
                                    <span className="Regularprice">${c.price}</span>
                                    <span className="Saleprice">{c.price - (c.price * c.discount / 100)}</span>
                                    <span className="discountRate"><b>{c.discount}% off</b></span>
                                    <br/>
                                   <p className="text-center"><button className="btn-primary addToCartBtn" onClick={()=>this.myAddCartFunc(c)}>Add to cart</button></p> 
                                </div>
                            </div>
                        </div>)
                }
            </div>
            
        );
    }
}

const mapDispatchToProps={
    addTocart
}
const mapStateToProps=(state)=>{
    console.log("mapActionToProps",JSON.stringify(state.data));
    debugger;
    return state;
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
