import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './components/About';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';

import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' render={() => {
          return (
            <>
            <Header />
            <NavigationBar />
            <Footer />
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
