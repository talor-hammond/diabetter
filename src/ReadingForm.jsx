import React, { Component } from 'react';
import { connect } from 'react-redux'

// actions:
import { addReading } from './actions/readings';

class ReadingForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bloodGlucose: "",
            note: ""
        };

        this.updateFormDetails = this.updateFormDetails.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    updateFormDetails(e) {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };

    onSubmit(e) {
        e.preventDefault();

        const { bloodGlucose, note } = this.state;
        const { dispatch } = this.props;

        const reading = {
            bloodGlucose,
            note
        };

        dispatch(addReading(reading));
    };

    render() {
        return (
            <form>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="bloodGlucose">Bg, mmol / L</label>
                        <input type="number" className="form-control" name="bloodGlucose" id="bloodGlucose" onChange={(e) => this.updateFormDetails(e)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="note">Note:</label>
                        <input type="text" className="form-control" name="note" id="note" placeholder="7 units of insulin, etc." onChange={(e) => this.updateFormDetails(e)}/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>

                </fieldset>
            </form>
        );
    };
};

export default connect()(ReadingForm);