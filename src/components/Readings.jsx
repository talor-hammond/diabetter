import React, {
    Component,
    Fragment
} from 'react';
import { connect } from 'react-redux';

import { Reading } from './Reading';

class Readings extends Component {
    render() {
        const { readings } = this.props;
        console.log(readings);

        return (
            <Fragment>
                <h1>Readings:</h1>
                <hr />
                {
                    readings.map((reading, i) => {
                        return (
                            <Reading
                                key={i}
                                bloodGlucose={reading.bloodGlucose}
                                note={reading.note}
                            />
                        )
                    })
                }
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