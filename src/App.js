import React, { Component } from 'react';
import './App.css';
import LoginCard from "./components/LoginCard";

class App extends Component {



  render() {

    var styles = {
        margin: '20%'
    }


    return (
      <div style={styles}>
        <LoginCard/>
      </div>
    );
  }
}

export default App;
