/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import Circle from './components/circle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Circle x={20} y={20} radius={20} fill="blue" />
      </header>
    </div>
  );
}

export default App;
