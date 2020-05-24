import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
// import PizzaList from "./pizza-list.component";

export default class AddToCart extends Component {

  constructor(props) {
    super(props)

    this.onChangePizzaName = this.onChangePizzaName.bind(this);
    this.onChangePizzaQuantity = this.onChangePizzaQuantity.bind(this);
    this.onChangephoneNo = this.onChangephoneNo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      quantity: '',
      phoneNo: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/saveorder/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          quantity: res.data.quantity,
          phoneNo: res.data.phoneNo
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangePizzaName(e) {
    this.setState({ name: e.target.value })
  }

  onChangePizzaQuantity(e) {
    this.setState({ quantity: e.target.value })
  }

  onChangephoneNo(e) {
    this.setState({ phoneNo: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const expenseObject = {
      name: this.state.name,
      quantity: this.state.quantity,
      phoneNo: this.state.phoneNo
    };

    axios.put('http://localhost:8000/api/saveorder/' + this.props.match.params.id, expenseObject)
      .then((res) => {
        console.log(res.data)
        console.log('Order sent')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Expense List 
    this.props.history.push('/pizza-list')
  }


  render() {
    return (<div className="card">
      <Row className="oPizza">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangePizzaName} />
        </Form.Group>

        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" value={this.state.quantity} onChange={this.onChangePizzaQuantity} />
        </Form.Group>

        <Form.Group controlId="Phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" value={this.state.phoneNo} onChange={this.onChangephoneNo} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Add
        </Button>
      </Form>
      </Row>
    </div>);
  }
}