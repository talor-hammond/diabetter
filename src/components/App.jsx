import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

// Core-components:


class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Header} />
        <Route exact path="/" component={Home} />
        <Route path="/" component={Footer} />
      </Router>
    );
  };
};

export default App;
