import React, { Component } from 'react';
import './App.css';
import Article from './article/Article';
import Footer from './footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Article />
        <Footer />
      </div>
    );
  }
}

export default App;
