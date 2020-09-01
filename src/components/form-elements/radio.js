import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Error } from './error';
import { YesIcon, NoIcon } from '../vectors';

function Radio({ label, name, register, errors }) {
  const [selection, setSelection] = useState(null);
  return (
    <div>
      {errors[name]?.message}
      <fieldset>
        <div className="items-center justify-between sm:space-x-4 sm:flex">
          <legend className="text-sm tracking-widest uppercase">
            {label}?*
          </legend>

          <div className="flex-shrink-0 mt-2 space-x-4 sm:mt-0">
            <label
              htmlFor={`${name}-yes`}
              className="inline-flex items-center space-x-1.5"
            >
              <span
                className={`inline-flex items-center justify-center w-8 h-8 text-sm tracking-widest uppercase border border-white transition duration-300 ease-in-out focus-within:shadow-outline ${
                  selection === 'yes' ? 'bg-white text-black' : ''
                }`}
              >
                <input
                  type="radio"
                  id={`${name}-yes`}
                  value="yes"
                  name={name}
                  ref={register({
                    required: <Error message="This field is required" />,
                  })}
                  onClick={() => setSelection('yes')}
                  className="sr-only"
                />
                <span aria-label="Yes">
                  <YesIcon className="w-4 h-4" />
                </span>
              </span>
            </label>
            <label
              htmlFor={`${name}-no`}
              className="inline-flex items-center space-x-1.5"
            >
              <span
                className={`inline-flex items-center justify-center w-8 h-8 text-sm tracking-widest uppercase border border-white transition duration-300 ease-in-out focus-within:shadow-outline ${
                  selection === 'no' ? 'bg-white text-black' : ''
                }`}
              >
                <input
                  type="radio"
                  id={`${name}-no`}
                  value="no"
                  name={name}
                  ref={register({
                    required: <Error message="This field is required" />,
                  })}
                  onClick={() => setSelection('no')}
                  className="sr-only"
                />
                <span aria-label="No">
                  <NoIcon className="w-4 h-4" />
                </span>
              </span>
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
