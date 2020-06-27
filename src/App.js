/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import Counter from './components/counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter initialCount={1} />
      </header>
    </div>
  );
}

export default App;
