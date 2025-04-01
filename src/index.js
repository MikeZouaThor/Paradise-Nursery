import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {useState,useEffect} from 'react';
import reportWebVitals from './reportWebVitals';
import ShoppingList from './ProductList';
import Cart from './Cart';
import { Route,Routes,BrowserRouter,Link,Switch } from 'react-router-dom';

const RootComponent = () => {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shoppinglist" element={<ShoppingList cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart data={cart} setCart={setCart}/>} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RootComponent/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

