import React, { Component } from 'react'
import './App.css'
import Router from './Router'
import Navigation from './components/Navigations/Navigation'


class App extends Component {

  render() {
    return (
      <div className="full-bg-img">
        <Navigation />
        <Router />
      </div>
    );
  }
}

export default App
