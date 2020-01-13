import React from 'react';
//import logo from './logo.svg';
import './App.css';
import SearchItem from './components/SearchItem';
import OrderSummary from './components/OrderSummary';
//import ItemList from './components/ItemList'
import { Route, BrowserRouter as Router,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
          <div>
            <Route exact path="/" component={SearchItem} /> 
            <Route path="/ordersummary" component={OrderSummary} /> 
          </div>
      </Router>
    </div>
  );
}

export default App;
