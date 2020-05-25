import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {PostCustomerData} from '../services/PostCustomerData';
import './Login.css';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Div from 'react-bootstrap/Col';

class CustomerLogin extends Component {

  constructor(){
    super();
   
    this.state = {
     name: '',
     password: '',
     redirectToReferrer: false
    };

    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);

  }

  

  login() {
    if(this.state.name && this.state.password){
      PostCustomerData('login',this.state).then((result) => {
       let responseJson = result;
       if(responseJson.userData){         
         sessionStorage.setItem('userData',JSON.stringify(responseJson));
         this.setState({redirectToReferrer: true});
       }
       
      });
    }
    
   }

  onChange(e){
    this.setState({[e.target.name]:e.target.value});
   }

  
  

  render() {

     if (this.state.redirectToReferrer) {
      return (<Redirect to={'/pizza-list'}/>)
    }
   
    if(sessionStorage.getItem('userData')){
      return (<Redirect to={'/pizza-list'}/>)
    }

     return (
       <div>
        <Row>             
            {/* <Col>
             <Form.Group controlId="Email">
                <Form.Label>Email</Form.Label>
                    <Form.Control placeholder="Email" type="email" value={this.state.email} onChange={this.onChangeCustomerEmail}/>
             </Form.Group>
            </Col>     */}

            <Col>
             <Form.Group controlId="Name">
                <Form.Label>Customer Name</Form.Label>
                <Form.Control required placeholder="Name" type="text" name="name"  onChange={this.onChange}/>
             </Form.Group>
            
            </Col>

            <Col>
             <Form.Group controlId="Password">
                <Form.Label>Password</Form.Label>
                    <Form.Control placeholder="***" required type="password" name="password" onChange={this.onChange}/>
             </Form.Group>
            </Col>        
        </Row>
        {/* <input type="submit" className="button success" value="Login" onClick={this.login} variant="primary"/> */}
        <a href="/register-customer">Registration</a>
        <Button variant="primary" size="lg" type="submit" onClick={this.login}>
          Sign In
        </Button>
        </div>



      // <div className="row" id="Body">
      //   <div className="medium-5 columns left">
      //   <h4>Login</h4>
      //   <label>name</label>
      //   <input class="form-control" type="text" name="name" placeholder="name" onChange={this.onChange}/>
      //   <label>Password</label>
      //   <input class="form-control" type="password" name="password"  placeholder="Password" onChange={this.onChange}/>
        // <input type="submit" className="button success" value="Login" onClick={this.login}/>
        // <a href="/signup">Registration</a>
      //   </div>
      // </div>
    );
  }
}

export default CustomerLogin;