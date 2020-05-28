import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { removePizza, addQuantity, subtractQuantity } from "./funcs/cartFuncs";

class Cart extends Component {
  //to remove the pizza completely

  handleRemove = (id) => {
    this.props.removePizza(id);
  };

  //to add the quantity

  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  };

  //to substruct from the quantity

  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  };

  render() {
    let addedPizzas = this.props.pizzas.length ? (
      this.props.pizzas.map((pizza) => {
        return (
          <li className="collection-pizza avatar" key={pizza.id}>
            <div className="pizza-img">
              <img src={pizza.imgUrl} alt={pizza.imgUrl} className="" />
            </div>

            <div className="pizza-desc">
              <span className="title">{pizza.name}</span>

              <p>{pizza.desc}</p>

              <p>
                <b>Price: {pizza.price}$</b>
              </p>

              <p>
                <b>Quantity: {pizza.quantity}</b>
              </p>

              <div className="add-remove">
                <Link to="/cart">
                  <i
                    className="material-icons"
                    onClick={() => {
                      this.handleAddQuantity(pizza.id);
                    }}
                  >
                    arrow_drop_up
                  </i>
                </Link>

                <Link to="/cart">
                  <i
                    className="material-icons"
                    onClick={() => {
                      this.handleSubtractQuantity(pizza.id);
                    }}
                  >
                    arrow_drop_down
                  </i>
                </Link>
              </div>

              <button
                className="waves-effect waves-light btn pink remove"
                onClick={() => {
                  this.handleRemove(pizza.id);
                }}
              >
                Remove
              </button>
            </div>
          </li>
        );
      })
    ) : (
      <p>Nothing.</p>
    );

    return (
      <div className="container">
        <div className="cart">
          <h5>You have ordered:</h5>

          <ul className="collection">{addedPizzas}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pizzas: state.addedPizzas,

    //addedPizzas: state.addedPizzas
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removepizza: (id) => {
      dispatch(removePizza(id));
    },

    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },

    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
