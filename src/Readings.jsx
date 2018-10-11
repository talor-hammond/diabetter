import React, {
    Component,
    Fragment
} from 'react';
import { connect } from 'react-redux';

import { Reading } from './Reading';

class Readings extends Component {
    constructor() {
        super();

        this.state = {
            readings: []
        };
    };

    render() {
        return (
            <Fragment>
                <h1>Readings:</h1>
                <hr />
                <Reading />
            </Fragment>
        );
    };
};

const mapStateToProps = ({ readings }) => {
    return {
        readings
    }
}

export default connect(mapStateToProps)(Readings); // connects this component to our store.