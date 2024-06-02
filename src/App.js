// src/App.js
import React from 'react';
import HoldingsSlider from './components/Slider';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Holding Slider</h1>
      </header>
      <main>
        <HoldingsSlider />
      </main>
    </div>
  );
}

export default App;
