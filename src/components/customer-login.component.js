import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
// import ExpensesList from './expenses-listing.component';
import Swal from 'sweetalert2';


export default class CustomerLogin extends Component {
      constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeCustomerName = this.onChangeCustomerName.bind(this);
    this.onChangeCustomerPhoneNo = this.onChangeCustomerPhoneNo.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      phoneNo: ''
     
    }
  }

  onChangeCustomerName(e) {
    this.setState({name: e.target.value})
  }

  
  onChangeCustomerPhoneNo(e) {
    this.setState({phoneNo: e.target.value})
  }
  

  onSubmit(e) {
    e.preventDefault()
     const customer = {
      name: this.state.name,
      phoneNo: this.state.phoneNo
    };
    axios.post('http://localhost:8000/api/login/', customer)
      .then(res => console.log(res.data));
    Swal.fire(
  'Great, Welcome!',
  'Logged in Successfully',
  'success'
)

    this.setState({name: '', phoneNo: ''})
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Row> 
            <Col>
             <Form.Group controlId="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control required placeholder="Name" type="text" value={this.state.name} onChange={this.onChangeCustomerName}/>
             </Form.Group>
            
            </Col>
            
            <Col>
             <Form.Group controlId="Email">
                <Form.Label>Email</Form.Label>
                    <Form.Control placeholder="Phone" type="text" value={this.state.phoneNo} onChange={this.onChangeCustomerPhoneNo}/>
             </Form.Group>
            </Col>  

            
        </Row>
        <Button variant="primary" size="lg" type="submit">
          Sign in
        </Button>
       
      </Form>
      <br></br>
      <br></br>
    </div>);
  }
}

