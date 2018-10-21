import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

// Core-components:
import { Header, Footer } from './components/layout';
import Home from './components/home/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route path="/" component={Header} />
          <Route exact path="/" component={Home} />
          <Route path="/" component={Footer} />
        </Fragment>
      </Router>
    );
  };
};

export default App;
