import React, { Component } from 'react';

class ReadingForm extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    };

    updateFormDetails(e) {
        console.log(`Name: ${e.target.name}, Value:; ${e.target.value}`);
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
                    
                    <button type="submit" className="btn btn-primary">Submit</button>

                </fieldset>
            </form>
        );
    };
};

export default ReadingForm;