import React, { Component } from 'react';

// Components:
import ReadingForm from './components/ReadingForm';
import Readings from './components/Readings';

class App extends Component {
  render() {
    return (
      <div className="container">
        <ReadingForm />
        <Readings />
      </div>
    );
  };
};

export default App;
