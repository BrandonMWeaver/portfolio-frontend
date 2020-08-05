import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './components/About';
import NavigationBar from './components/NavigationBar';

import './App.css';
import ProjectsContainer from './containers/ProjectsContainer';

function App() {
  const projects = [
    {
      title: "Garage Sale",
      videoSource: "https://www.youtube.com/embed/rKIgAzOZxZE",
      description: "A brief demonstration of my React/Rails application.",
      href: "https://github.com/BrandonMWeaver/garage-sale"
    },
    {
      title: "Garage Sale",
      videoSource: "https://www.youtube.com/embed/rKIgAzOZxZE",
      description: "A brief demonstration of my React/Rails application.",
      href: "https://github.com/BrandonMWeaver/garage-sale"
    },
    {
      title: "Garage Sale",
      videoSource: "https://www.youtube.com/embed/rKIgAzOZxZE",
      description: "A brief demonstration of my React/Rails application.",
      href: "https://github.com/BrandonMWeaver/garage-sale"
    },
    {
      title: "Garage Sale",
      videoSource: "https://www.youtube.com/embed/rKIgAzOZxZE",
      description: "A brief demonstration of my React/Rails application.",
      href: "https://github.com/BrandonMWeaver/garage-sale"
    },
    {
      title: "Garage Sale",
      videoSource: "https://www.youtube.com/embed/rKIgAzOZxZE",
      description: "A brief demonstration of my React/Rails application.",
      href: "https://github.com/BrandonMWeaver/garage-sale"
    },
    {
      title: "Garage Sale",
      videoSource: "https://www.youtube.com/embed/rKIgAzOZxZE",
      description: "A brief demonstration of my React/Rails application.",
      href: "https://github.com/BrandonMWeaver/garage-sale"
    },
    {
      title: "Garage Sale",
      videoSource: "https://www.youtube.com/embed/rKIgAzOZxZE",
      description: "A brief demonstration of my React/Rails application.",
      href: "https://github.com/BrandonMWeaver/garage-sale"
    },
    {
      title: "Garage Sale",
      videoSource: "https://www.youtube.com/embed/rKIgAzOZxZE",
      description: "A brief demonstration of my React/Rails application.",
      href: "https://github.com/BrandonMWeaver/garage-sale"
    }
  ];

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
        <Route exact path="/projects" render={() => {
          return <ProjectsContainer projects={projects} />
        }} />
        <Route exact path="/about" render={() => {
          return <About />
        }} />
      </Router>
    </div>
  );
}

export default App;
