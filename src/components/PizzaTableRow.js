import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form'

export default class ExpenseTableRow extends Component {
   

    render() {
        return (<div className="col-md-4">
                 <Form.Group controlId="Name">
                    <Form.Label className="pName"><h2>{this.props.obj.name}</h2></Form.Label>
                    <br></br>
                    <img src={this.props.obj.imgUrl} alt={'alt'} />
                    <br></br>
                    <p>{this.props.obj.description}</p>
                    <br></br>
                    KES. {this.props.obj.price}
                    <br></br>                    
                 </Form.Group>
                 <Form.Group controlId="Name">                                   
                 </Form.Group>

                 <Link className="add-to-cart" to={"/add-to-cart/" + this.props.obj.id}>
                    <Button variant="primary" size="sm" type="submit">
                     Add to Cart
                    </Button> 
                </Link> 
          <br></br>
          <br></br>
        </div>);
      }
}