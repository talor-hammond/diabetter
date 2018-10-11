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
        return (
            <h1>Testing</h1>
        );
    };
};

const mapStateToProps = ({ readings }) => {
    return {
        readings
    }
}

export default connect(mapStateToProps)(Readings); // connects this component to our store.