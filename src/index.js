import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import axios from 'axios'
class App extends Component {

  render() {
  
     setInterval(function () {
        axios.get("http://flight-reservation-backend.herokuapp.com");
        console.log('chala')
    }, 6000);
    setInterval(function () {
        axios.get("http://flight-reservation.herokuapp.com");
        console.log('chala2')
    }, 6000);
    return (
      <div>
       <h1>azam</h1>
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
