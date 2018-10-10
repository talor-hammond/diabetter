import React, { Component } from 'react';

class ReadingForm extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    };

    render() {
        return (
            <form>
                <fieldset>
                    <div class="form-group">
                        <label for="bloodGlucose">Bg, mmol / L</label>
                        <input type="number" class="form-control" id="bloodGlucose" />
                    </div>
                    <div class="form-group">
                        <label for="note">Note:</label>
                        <input type="text" class="form-control" id="note" placeholder="7 units of insulin, etc." />
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Submit</button>

                </fieldset>
            </form>
        );
    };
};

export default ReadingForm;