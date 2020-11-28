import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';

import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Halal from './pages/Halal';
import HomePage from './pages/HomePage';
import OrderMeat from './pages/OrderMeat';

import Navbar from './components/Navbar';

// import { Layout } from 'antd';
// const { Header, Content, Footer } = Layout;

function App() {
  return (
    <>
      <Router>
          <Navbar />
            <Switch>
              <Route path="/" component={HomePage} exact></Route>
              <Route path="/about" component={AboutUs} exact></Route>
              <Route path="/halal" component={Halal} exact></Route>
              <Route path="/order-meat" component={OrderMeat} exact></Route>
              <Route path="/contact" component={ContactUs} exact></Route>
            </Switch>
          <p>©2020 CornerShop </p>
      </Router>
    </>
  );
}

export default App;
