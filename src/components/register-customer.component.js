import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import CustomerLogin from './customer-login.component';
import Swal from 'sweetalert2';


export default class RegisterCustomer extends Component {
      constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeCustomerName = this.onChangeCustomerName.bind(this);
    this.onChangeCustomerEmail = this.onChangeCustomerEmail.bind(this);
    this.onChangeCustomerPhoneNo = this.onChangeCustomerPhoneNo.bind(this);
    this.onChangeCustomerCurrentAddress = this.onChangeCustomerCurrentAddress.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      email: '',
      phoneNo: '',
      currentAddress: ''
    }
  }

  onChangeCustomerName(e) {
    this.setState({name: e.target.value})
  }

  onChangeCustomerEmail(e) {
    this.setState({email: e.target.value})
  }

  onChangeCustomerPhoneNo(e) {
    this.setState({phoneNo: e.target.value})
  }

  onChangeCustomerCurrentAddress(e) {
    this.setState({currentAddress: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()
     const customer = {
      name: this.state.name,
      email: this.state.email,
      phoneNo: this.state.phoneNo,
      currentAddress: this.state.currentAddress
    };
    // axios.post('http://localhost:8000/api/addcustomer/', customer)
    axios.post('http://yupizza-backend.herokuapp.com/api/addcustomer/', customer)
      .then(res => console.log(res.data));
    Swal.fire(
  'Welcome!',
  'Account created Successfully',
  'success'
)

    this.setState({name: '', email: '', phoneNo: '', currentAddress: ''})
  }

  render() {
      return (<div className="form-wrapper">
    <br></br>
      <h4>Create Account</h4>

      <br></br>
      <Form onSubmit={this.onSubmit}>
        <Row> 
            <Col>
             <Form.Group controlId="Name">
                <Form.Label>Customer Name</Form.Label>
                <Form.Control required placeholder="Name" type="text" value={this.state.name} onChange={this.onChangeCustomerName}/>
             </Form.Group>
            
            </Col>
            
            <Col>
             <Form.Group controlId="Email">
                <Form.Label>Email</Form.Label>
                    <Form.Control placeholder="Email" type="email" value={this.state.email} onChange={this.onChangeCustomerEmail}/>
             </Form.Group>
            </Col>     

            <Col>
             <Form.Group controlId="phoneNo">
                <Form.Label>Phone Number</Form.Label>
                    <Form.Control required placeholder="Phone" type="text" value={this.state.phoneNo} onChange={this.onChangeCustomerPhoneNo}/>
             </Form.Group>
            </Col> 

            <Col>
             <Form.Group controlId="currentAddress">
                <Form.Label>Address</Form.Label>
                    <Form.Control required type="text" value={this.state.currentAddress} onChange={this.onChangeCustomerCurrentAddress}/>
             </Form.Group>
            </Col>         
        </Row>
        <Button variant="primary" size="lg" type="submit">
          Sign up
        </Button>
       
      </Form>
      <br></br>
      <br></br>
    <hr></hr>
    <h4>Login Section</h4>
    <br></br>
      <CustomerLogin> </CustomerLogin>
    </div>);
  }
}

