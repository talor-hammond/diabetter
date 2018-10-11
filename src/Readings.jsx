import React,  { Component } from 'react';
import { connect } from 'react-redux';

class Readings extends Component { 
    constructor() {
        super();

        this.state = {
            readings: []
        };
    };

    render() {
        console.log(this.props);

        return (
            <h1>Testing</h1>
        );
    };
};

export default connect()(Readings); // connects this component to our store.