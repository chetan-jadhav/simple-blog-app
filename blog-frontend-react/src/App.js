import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Blogs from './Blogs';
import Authors from './Authors';
import Keywords from './Keywords';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/blogs" component={Blogs} />
          <Route path="/authors" component={Authors} />
          <Route path="/keywords" component={Keywords} />
        </div>
      </Router>
    );
  }
}

export default App;
