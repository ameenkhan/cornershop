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

import NavBar from './components/NavBar';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Header>
            <NavBar />
          </Header>
          <Content>
            <Switch>
              <Route path="/" component={HomePage} exact></Route>
              <Route path="/about" component={AboutUs} exact></Route>
              <Route path="/halal" component={Halal} exact></Route>
              <Route path="/order-meat" component={OrderMeat} exact></Route>
              <Route path="/contact" component={ContactUs} exact></Route>
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>©2020 CornerShop </Footer>
        </Layout>
      </Router>
    </>
  );
}

export default App;
