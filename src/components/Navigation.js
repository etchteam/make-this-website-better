import React from 'react';
import { WithWizard } from 'react-albus';

const Navigation = () => (
  <WithWizard
    render={({ next, previous, step, steps } ) => (
      
      <div className="form__navigation">
        {steps.indexOf(step) < steps.length - 1 && (
            <button className="button button--primary" onClick={next} type="button">
                Next
            </button>
        )}
        
        {steps.indexOf(step) === steps.length - 1 && (
            <button className="button button--primary" type="submit">
                Submit
            </button>
        )}

        {steps.indexOf(step) > 0 && (
            <button className="button button--secondary" onClick={previous} type="button">
                Back
            </button>
        )}
      </div>
    )}
  />
);

export default Navigation;
