import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://usapple.org/wp-content/uploads/2019/10/apple-pink-lady.png" className="App-logo" alt="logo" />
        <h1 className='jum'>Welcome to Paradise Nursery!</h1>
        <p className='text'>
          Paradise Nursery strives to provide affortable plants to everyone. These plants are well nourished and cared for at our local sanctuary in Minnesota.
        </p>
        <button className="startingButton" id = "startButton" onclick="">Getting Started</button>
      </header>
    </div>

  );
}

export default App;
