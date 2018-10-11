import React, { Component } from 'react';

// Components:
import ReadingForm from './ReadingForm';
import Readings from './Readings';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Readings />
        <ReadingForm />
      </div>
    );
  };
};

export default App;
