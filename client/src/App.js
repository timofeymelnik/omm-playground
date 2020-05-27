import React from 'react';
import './App.css';
import Header from './components/header'
import { Button } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Header name="OMM" parentMethod={(data) => {console.log(data)}}/>
    </div>
  );
}

export default App;
