import PropTypes from 'prop-types';
import React from 'react';

import { Error } from './error';

function Radio({ label, name, register, errors }) {
  return (
    <div className="col-span-2">
      {errors[name]?.message}
      <fieldset>
        <div className="items-center justify-between sm:space-x-4 sm:flex">
          <legend className="tracking-widest uppercase">{label}?</legend>

          <div className="flex-shrink-0 mt-2 space-x-4 sm:mt-0">
            <label
              htmlFor={`${name}-yes`}
              className="inline-flex items-center space-x-1.5"
            >
              <input
                type="radio"
                id={`${name}-yes`}
                value="yes"
                name={name}
                ref={register({ required: true })}
                className="form-radio"
              />
              <span className="tracking-widest uppercase">Yes</span>
            </label>
            <label
              htmlFor={`${name}-no`}
              className="inline-flex items-center space-x-1.5"
            >
              <input
                type="radio"
                id={`${name}-no`}
                value="no"
                name={name}
                ref={register({
                  required: (
                    <Error message="This field is required. Please choose yes or no" />
                  ),
                })}
                className="form-radio"
              />
              <span className="tracking-widest uppercase">No</span>
            </label>
          </div>
        </div>
      </fieldset>
    </div>
  );
}

Radio.propTypes = {
  errors: PropTypes.object,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
};

export { Radio };
