import React, { Component } from 'react';
import logo from './truck.jpg';
import './App.css';
import Orders from "./components/Orders";

class App extends Component {
  render() {
    return (

        <div className="App">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"/>
            <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Flyttebyrå</h1>
        </header>
        <Orders/>
      </div>
    );
  }
}

export default App;
