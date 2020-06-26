/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import List from './components/list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <List username="gaearon" />
      </header>
    </div>
  );
}

export default App;
