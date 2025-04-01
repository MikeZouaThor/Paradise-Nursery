import './App.css';
import React from 'react';
import {useState,useEffect,useId } from 'react';
import { Route,Routes,Link } from 'react-router-dom';
import Cart from './Cart';

function ProductList({cart, setCart}) {
    const [fruits, setFruit] = useState([
      {id:0,"name":"Apple","price": 4.99,"img":'https://usapple.org/wp-content/uploads/2019/10/apple-pink-lady.png'},
      {id:1,"name":"Orange","price": 7.99,"img":'https://i5.walmartimages.com/seo/Fresh-Navel-Orange-Each_a134f2a1-2bb0-4e5c-a594-f84b63ab5928.22241f295458186b2ba0e4ed7d460d52.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF'},
      {id:2,"name":"Pear","price": 3.99,"img":'https://img.imageboss.me/fourwinds/width/425/dpr:2/shop/products/pear.png?v=1729715898'},
      {id:3,"name":"Banana","price": 4.79,"img":'https://m.media-amazon.com/images/I/31dke4F+cTL.jpg'},
      {id:4,"name":"Pineapple","price": 10.79,"img":'https://i5.walmartimages.com/seo/Fresh-Pineapple-Each_1d2b3723-b31f-481d-ae30-c82fcbb59e20.d2e4de8d8b987f98a6e9da93a7e8c752.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF'},
      {id:5,"name":"Grape","price": 1.79,"img":'https://img.imageboss.me/fourwinds/width/425/dpr:2/shop/products/rubyseedlessgrapes.jpg?v=1729716408'}
    ]);

    const addToCart = (fruit) => {
      const uniqueFruit = { ...fruit, id: Date.now() }
      setCart([...cart, uniqueFruit]);
    };

    const listItems = fruits.map((fruit) =>
        <div>
            <h3>{fruit.name}</h3>
            <img src={fruit.img} className="fruitLogos" alt="logo"/>
            <p>${fruit.price}</p>
            <button onClick={() => addToCart(fruit)}>Add to Cart</button>

        </div>
    );

    const totalItems = cart.length;

  
    return (
      <div>
        <h1>Product List</h1>
        <h2>Items In Cart: {cart.length}</h2>
        <Link to="/cart">
            <button><img src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Sale-Stickers-PNG/Shopping_Cart_Icon_PNG_Clipart.png?m=1629833029"></img><h3>{totalItems}</h3>View Cart</button>
        </Link>
        <div>{listItems}</div>
        <Link to="/">
          <button className="HomeButton" id = "homeButton">Back To Home</button>
        </Link>
      </div>
    );
  }

  export default ProductList;