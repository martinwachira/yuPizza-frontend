import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RegisterCustomer from "./components/register-customer.component";
import PizzaList from "./components/pizza-list.component";
import CustomerLogin from "./components/customer-login.component";
import AddToCart from "./components/add-to-cart.component";


function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="warning" variant="primary">
         
          <Container>

            <Navbar.Brand>
              <Link to={"/pizza-list"} className="nav-link appName">
              Yummi Pizza
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
              <Link to={"/pizza-list"} className="nav-link">
                  Pizzas
                </Link>
                <Link to={"/customer-login"} className="nav-link">
                  Login
                </Link>                
                <Link to={"/register-customer"} className="nav-link">
                  Register
                </Link>
              </Nav>
            </Nav>
          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={PizzaList} />
                <Route path="/register-customer" component={RegisterCustomer} />
                <Route path="/pizza-list" component={PizzaList} />
                <Route path="/customer-login" component={CustomerLogin} />
                <Route path="/add-to-cart/:id" component={AddToCart} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;
