import React, { Component } from 'react'
import LikeCounter from './LikeCounter'

class App extends Component {
  render() {
    return (
      <div >
        <header>          
          <h1>Example - Testing React code with Jest</h1>
        </header>
        <LikeCounter />
      </div>
    );
  }
}

export default App;
