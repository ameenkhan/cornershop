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
import NavBar from './components/NavBar';
import OrderMeat from './pages/OrderMeat';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div>
          <Switch>
            <Route path="/" component={HomePage} exact></Route>
            <Route path="/order-meat" component={OrderMeat} exact></Route>
            <Route path="/about-us" component={AboutUs} exact></Route>
            <Route path="/halal" component={Halal} exact></Route>
            <Route path="/contact" component={ContactUs} exact></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
