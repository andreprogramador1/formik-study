import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import {Routes} from './routes/index'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
