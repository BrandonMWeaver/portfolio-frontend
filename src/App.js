import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './components/About';
import NavigationBar from './components/NavigationBar';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' render={() => {
          return (
            <>
            <NavigationBar />
            </>
          );
        }} />
        <Route exact path="/about" render={() => {
          return <About />
        }} />
      </Router>
    </div>
  );
}

export default App;
