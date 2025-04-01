import './App.css';
import React from 'react';
import {useState,useEffect} from 'react';
import { Route,Routes,Link } from 'react-router-dom';
import ProductList from './ProductList'


function Cart(props) {

    const total = props.data.reduce((sum, fruit) => sum + fruit.price, 0).toFixed(2);
    const totalItems = props.data.length;
    var check = true;

    const addToCart = (fruit) => {
      const uniqueFruit = { ...fruit, id: Date.now() }
      props.setCart([...props.data, uniqueFruit]);
    };

    const listItems = props.data.map((fruit) =>
        <div>
            <h2>{fruit.name} ${fruit.price}</h2>
            <button onClick={() => addToCart(fruit)}>+</button>
            <button className="xButton"onClick={() => removeFruit(fruit)}>X</button>
        </div>
    );

    const removeFruit = (fruit) => {
      props.setCart(props.data.filter(item => item.id !== fruit.id))
    }

    const show = () => {
      if (check == true) {
        document.getElementById("Soon").innerHTML = "Check OUT COMNING SOON"
        check = false;
      }
    }


  
    return (
      <div>
        <h1>Your Shopping Cart:</h1>
        <h4>Your cart's total: ${total}</h4>
        <h4>Amount of Items in cart: {totalItems}</h4>
        <Link to="/">
          <button className="HomeButton" id = "homeButton">Back To Home</button>
        </Link>
        <Link to="/shoppingList">
          <button className="productButton" id = "productButton">Back To Product Listing</button>
        </Link>
        <button onClick={() => show()}>Check Out</button>
        <p id="Soon"></p>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }

  export default Cart;