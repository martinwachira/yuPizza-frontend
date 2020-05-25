import React, { Component } from "react";
import axios from 'axios';
import PizzaTableRow from './PizzaTableRow';

import Row from 'react-bootstrap/Row';


export default class PizzaList extends Component {

  constructor(props) {
    super(props)
    this.state = {
        pizzas: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/pizza')
    // axios.get('https://yupizza-backend.herokuapp.com/api/pizza')    
      .then(res => {
        this.setState({ pizzas: res.data });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  dataC() {
    return this.state.pizzas.map((res, i) => {
      return <PizzaTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="container-fluid"> 
    <Row>
      {this.dataC()}
    </Row>
    </div>);
  }
}