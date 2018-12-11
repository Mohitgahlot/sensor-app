import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Dashboard from './Containers/Dashboard/Dashboard';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)
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
