// import React, { useRef, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
function App() {

  return (
    <>
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
       </Router>
    </div>
    </>
  );
}


export default App;

