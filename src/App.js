import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
//import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart'
import Default from './components/Default'
import Modal from './components/Modal'
import { NavigationBar } from './components/NavigationBar';
import Sidebar from './components/Sidebar'

function App() {
  return (
    <React.Fragment>
        <NavigationBar /> */}

       <Sidebar /> */}
    {/* <Navbar /> */}
       <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/phone" component={ProductList} categorie="phone"/>
        <Route exact path="/TV" component={ProductList} categorie="TV"/>
        <Route path="/details" component={Details} />
        <Route path="/Cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal /> 
    </React.Fragment>
  );
}

export default App;
