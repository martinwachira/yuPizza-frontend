import React, { Component } from "react";
import axios from 'axios';
// import PizzaTableRow from './PizzaTableRow';

// import Row from 'react-bootstrap/Row';


export default class PizzaList extends Component {

  handleClick = (id)=>{

    this.props.addToCart(id); 

}

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
  
  render() {
    let pizzaList = this.state.pizzas.map(pizza=>{

      return(

        <div className="card" key={pizza.id}>
        <br></br>

                  <div className="card-image">

                      <img src={pizza.imgUrl} alt={pizza.name}/>


                      <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(pizza.id)}}><i className="material-icons">add</i></span>

                  </div>

                  <br></br>

                  <span className="card-title">{pizza.name}</span>

                  <div className="card-content">

                      <p>{pizza.description}</p>

                      <p><b>Price: Kes. {pizza.price}</b></p>

                  </div>

           </div>
      )

    })

    return(

      <div className="container">

          {/* <h3 className="center">All Pizzas List</h3> */}

          <div className="box">

              {pizzaList}

          </div>

      </div>

  )

}
}