import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Router from './Router';
import Navigation from './components/Navigations/Navigation';


class App extends Component {
  /*constructor(props){
    super(props);
    this.state={
      isActiveHome: true
    };
  } */

  render() {
    return (
      <div className="full-bg-img">
        <Navigation />
        <Router />
      </div>
    );
  }
}

export default App;
