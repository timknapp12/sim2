import React, { Component } from 'react';
import './App.css';
import Register from './components/Register/Register';
import router from './router';

class App extends Component {
  render() {
    return (
      <div>
        { router }
        <Register/>
      </div>
    );
  }
}

export default App;
