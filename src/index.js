import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router,Switch} from 'react-router-dom';
import OrderSummary from './components/OrderSummary';
import * as serviceWorker from './serviceWorker';

import {createStore} from 'redux';
import combineReducers from './reducers';
import {Provider} from 'react-redux';

const routing = (<Router>
    <div>
        {/* <ul>
            
            <li><Link to="/">SearchItem</Link></li>
            <li><Link to="/OrderSummary">OrderSummary</Link></li>
            
        </ul> */}
        <Switch>
         <Route exact path="/" component={App} /> 
         <Route path="/ordersummary" component={OrderSummary} /> 
         </Switch>  

    </div>
</Router>)

const store=createStore(combineReducers);
store.subscribe(()=>{
    console.log("Store Data",store.getState());
})
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
