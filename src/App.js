import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Dashboard from './Containers/Dashboard/Dashboard';
class App extends Component {
  render() {
    return (
      <div>
          <Route path="/" exact component={Dashboard}/>
      </div>
    );
  }
}

export default App;
